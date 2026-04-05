/**
 * Full End-to-End Playwright Audit of Citi Marketing Website
 * Target: https://citi-website-staging.vercel.app
 * READ-ONLY audit — no code modifications
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://citi-website-staging.vercel.app';
const SCREENSHOT_DIR = '/Users/devaccount/citibank-website/audit-screenshots';

// All active routes from App.tsx
const ROUTES = [
  { path: '/', name: 'Index (Home)' },
  { path: '/about', name: 'About' },
  { path: '/revolution', name: 'Revolution' },
  { path: '/impact', name: 'Impact' },
  { path: '/pilot', name: 'Pilot' },
  { path: '/uss', name: 'USS' },
  { path: '/how-it-works', name: 'How It Works' },
  { path: '/case-study', name: 'Case Study' },
  { path: '/terms', name: 'Terms' },
  { path: '/privacy', name: 'Privacy' },
  { path: '/security', name: 'Security' },
];

// Patterns to flag
const PLACEHOLDER_PATTERNS = [
  /lorem\s+ipsum/i,
  /\bTODO\b/,
  /\bFIXME\b/,
  /placeholder/i,
  /coming\s+soon/i,
];

const BAD_DATA_PATTERNS = [
  /\bNaN\b/,
  /\bundefined\b/,
  /\bInfinity\b/,
];

const PRICE_150K_PATTERNS = [
  /\$150[,.]?000/,
  /\$150K/i,
];

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
}

async function auditPage(page, route, results) {
  const url = `${BASE_URL}${route.path}`;
  const pageName = route.name;
  const filePrefix = sanitizeFilename(pageName);

  const report = {
    url,
    name: pageName,
    status: null,
    title: null,
    loadTime: null,
    brokenImages: 0,
    brokenImageDetails: [],
    consoleErrors: 0,
    consoleErrorDetails: [],
    networkErrors: 0,
    networkErrorDetails: [],
    chaseReferences: 0,
    chaseReferenceDetails: [],
    price150kReferences: 0,
    price150kDetails: [],
    dataIssues: 0,
    dataIssueDetails: [],
    placeholderText: 0,
    placeholderDetails: [],
    totalLinks: 0,
    brokenLinks: 0,
    brokenLinkDetails: [],
    screenshotViewport: `${filePrefix}_viewport.png`,
    screenshotFull: `${filePrefix}_fullpage.png`,
    contentSummary: '',
    issues: [],
  };

  // Collect console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // Collect network errors
  const networkErrors = [];
  page.on('response', response => {
    const status = response.status();
    if (status >= 400) {
      networkErrors.push(`${status} ${response.url()}`);
    }
  });

  // Navigate
  const startTime = Date.now();
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    report.loadTime = Date.now() - startTime;
    report.status = response?.status() || 'unknown';
  } catch (e) {
    report.loadTime = Date.now() - startTime;
    report.status = 'TIMEOUT/ERROR';
    report.issues.push(`Navigation error: ${e.message}`);
  }

  // Wait a bit for animations/lazy loading
  await page.waitForTimeout(2000);

  // Title
  report.title = await page.title();

  // Console errors
  report.consoleErrors = consoleErrors.length;
  report.consoleErrorDetails = consoleErrors.slice(0, 10);

  // Network errors
  report.networkErrors = networkErrors.length;
  report.networkErrorDetails = networkErrors.slice(0, 10);

  // Check load time
  if (report.loadTime > 5000) {
    report.issues.push(`SLOW: Page took ${report.loadTime}ms to load (>5s threshold)`);
  }

  // Screenshots
  try {
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, report.screenshotViewport),
      fullPage: false,
    });
  } catch (e) {
    report.issues.push(`Viewport screenshot failed: ${e.message}`);
  }

  try {
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, report.screenshotFull),
      fullPage: true,
    });
  } catch (e) {
    report.issues.push(`Full page screenshot failed: ${e.message}`);
  }

  // Broken images
  const brokenImages = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    const broken = [];
    imgs.forEach(img => {
      if (img.naturalWidth === 0 && img.src && !img.src.startsWith('data:')) {
        broken.push({ src: img.src, alt: img.alt || '(no alt)' });
      }
    });
    return broken;
  });
  report.brokenImages = brokenImages.length;
  report.brokenImageDetails = brokenImages;
  if (brokenImages.length > 0) {
    report.issues.push(`${brokenImages.length} broken image(s): ${brokenImages.map(b => b.src).join(', ')}`);
  }

  // Get all visible text
  const visibleText = await page.evaluate(() => {
    return document.body?.innerText || '';
  });

  // Chase references — only flag unexpected ones (not in competitive analysis context)
  // We'll flag ALL and let the auditor decide context
  const chaseMatches = visibleText.match(/\bChase\b/gi) || [];
  report.chaseReferences = chaseMatches.length;
  if (chaseMatches.length > 0) {
    // Get context around each match
    const lines = visibleText.split('\n').filter(l => /\bChase\b/i.test(l));
    report.chaseReferenceDetails = lines.slice(0, 5).map(l => l.trim().substring(0, 120));
  }

  // $150K references (should be $600K)
  let price150kCount = 0;
  const price150kDetails = [];
  for (const pat of PRICE_150K_PATTERNS) {
    const matches = visibleText.match(new RegExp(pat.source, 'gi')) || [];
    price150kCount += matches.length;
    if (matches.length > 0) {
      const lines = visibleText.split('\n').filter(l => pat.test(l));
      price150kDetails.push(...lines.slice(0, 3).map(l => l.trim().substring(0, 150)));
    }
  }
  report.price150kReferences = price150kCount;
  report.price150kDetails = [...new Set(price150kDetails)];
  if (price150kCount > 0) {
    report.issues.push(`PRICING ERROR: ${price150kCount} reference(s) to $150K (should be $600K)`);
  }

  // Data issues (NaN, undefined, Infinity)
  for (const pat of BAD_DATA_PATTERNS) {
    const matches = visibleText.match(new RegExp(pat.source, 'g')) || [];
    if (matches.length > 0) {
      report.dataIssues += matches.length;
      const lines = visibleText.split('\n').filter(l => pat.test(l));
      report.dataIssueDetails.push(...lines.slice(0, 3).map(l => `${pat.source}: ${l.trim().substring(0, 100)}`));
    }
  }

  // Placeholder text
  for (const pat of PLACEHOLDER_PATTERNS) {
    const matches = visibleText.match(new RegExp(pat.source, 'gi')) || [];
    if (matches.length > 0) {
      report.placeholderText += matches.length;
      const lines = visibleText.split('\n').filter(l => pat.test(l));
      report.placeholderDetails.push(...lines.slice(0, 3).map(l => `${pat.source}: ${l.trim().substring(0, 100)}`));
    }
  }

  // Links audit
  const links = await page.evaluate(() => {
    const anchors = document.querySelectorAll('a');
    const results = [];
    anchors.forEach(a => {
      results.push({
        href: a.href || '',
        text: (a.textContent || '').trim().substring(0, 80),
        isEmpty: !a.href || a.href === '#' || a.href === 'javascript:void(0)' || a.href.endsWith('#'),
      });
    });
    return results;
  });
  report.totalLinks = links.length;
  const brokenLinksFound = links.filter(l => l.isEmpty);
  report.brokenLinks = brokenLinksFound.length;
  report.brokenLinkDetails = brokenLinksFound.map(l => `"${l.text}" -> ${l.href || '(empty)'}`);

  // Page height check
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  if (pageHeight < 200) {
    report.issues.push(`Page appears collapsed — height only ${pageHeight}px`);
  }
  if (pageHeight > 50000) {
    report.issues.push(`Page appears excessively tall — height ${pageHeight}px`);
  }

  // Content summary (first 500 chars of visible text)
  const summary = visibleText.substring(0, 500).replace(/\n+/g, ' ').trim();
  report.contentSummary = summary.substring(0, 200) + '...';

  // Text overflow check — look for horizontal scroll
  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  if (hasHorizontalOverflow) {
    report.issues.push('LAYOUT: Page has horizontal overflow (potential text clipping)');
  }

  results.push(report);
  return report;
}

async function auditNavigation(page, results) {
  const navReport = {
    desktopNav: [],
    mobileNav: { works: false, issues: [] },
  };

  // Desktop navigation audit
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Find all nav links
  const navLinks = await page.evaluate(() => {
    const nav = document.querySelector('nav') || document.querySelector('header');
    if (!nav) return [];
    const links = nav.querySelectorAll('a');
    return Array.from(links).map(a => ({
      href: a.href,
      text: (a.textContent || '').trim(),
    }));
  });

  navReport.desktopNav = navLinks;

  // Click each nav link and verify navigation
  for (const link of navLinks) {
    if (!link.href || link.href === '#' || link.href.startsWith('mailto:') || link.href.startsWith('tel:')) continue;
    try {
      const navUrl = new URL(link.href);
      // Only test internal links
      if (navUrl.origin !== new URL(BASE_URL).origin) continue;

      await page.goto(link.href, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(500);
      const currentUrl = page.url();
      if (!currentUrl.includes(navUrl.pathname) && navUrl.pathname !== '/') {
        navReport.desktopNav.push({ issue: `Link "${link.text}" did not navigate correctly. Expected ${navUrl.pathname}, got ${currentUrl}` });
      }
    } catch (e) {
      navReport.desktopNav.push({ issue: `Link "${link.text}" navigation error: ${e.message}` });
    }
  }

  // Mobile navigation audit
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Screenshot mobile view
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'mobile_home_375.png'),
    fullPage: false,
  });

  // Try to find and click hamburger menu
  const hamburger = await page.$('button[aria-label*="menu" i], button[aria-label*="nav" i], button[class*="menu" i], button[class*="hamburger" i], [data-testid="mobile-menu"], header button:not([type="submit"])');
  if (hamburger) {
    try {
      await hamburger.click();
      await page.waitForTimeout(500);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'mobile_nav_open.png'),
        fullPage: false,
      });
      navReport.mobileNav.works = true;

      // Check mobile nav links
      const mobileNavLinks = await page.evaluate(() => {
        // Look for visible navigation items after menu opens
        const allLinks = document.querySelectorAll('a');
        return Array.from(allLinks)
          .filter(a => {
            const rect = a.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
          })
          .map(a => ({
            href: a.href,
            text: (a.textContent || '').trim(),
          }))
          .filter(l => l.text.length > 0);
      });
      navReport.mobileNav.links = mobileNavLinks;
    } catch (e) {
      navReport.mobileNav.issues.push(`Hamburger click failed: ${e.message}`);
    }
  } else {
    navReport.mobileNav.issues.push('No hamburger/mobile menu button found');
    // Try generic approach - any button in the header
    const headerButtons = await page.$$('header button');
    if (headerButtons.length > 0) {
      try {
        await headerButtons[0].click();
        await page.waitForTimeout(500);
        await page.screenshot({
          path: path.join(SCREENSHOT_DIR, 'mobile_nav_attempt.png'),
          fullPage: false,
        });
        navReport.mobileNav.works = true;
        navReport.mobileNav.issues.push('Used fallback header button click');
      } catch (e) {
        navReport.mobileNav.issues.push(`Fallback header button click failed: ${e.message}`);
      }
    }
  }

  // Reset viewport
  await page.setViewportSize({ width: 1440, height: 900 });

  return navReport;
}

async function auditForms(page) {
  const formReport = { forms: [] };

  for (const route of ROUTES) {
    await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);

    const forms = await page.evaluate(() => {
      const allForms = document.querySelectorAll('form');
      const allInputs = document.querySelectorAll('input, textarea, select');
      return {
        formCount: allForms.length,
        inputCount: allInputs.length,
        inputs: Array.from(allInputs).map(i => ({
          tag: i.tagName.toLowerCase(),
          type: i.getAttribute('type') || '',
          name: i.getAttribute('name') || '',
          placeholder: i.getAttribute('placeholder') || '',
          required: i.hasAttribute('required'),
          disabled: i.hasAttribute('disabled'),
        })),
      };
    });

    if (forms.formCount > 0 || forms.inputCount > 0) {
      formReport.forms.push({
        page: route.name,
        path: route.path,
        ...forms,
      });
    }
  }

  return formReport;
}

async function main() {
  console.log('='.repeat(80));
  console.log('CITI MARKETING WEBSITE — FULL AUDIT');
  console.log(`Target: ${BASE_URL}`);
  console.log(`Date: ${new Date().toISOString()}`);
  console.log('='.repeat(80));
  console.log('');

  // Clean screenshot directory
  const existingFiles = fs.readdirSync(SCREENSHOT_DIR);
  for (const file of existingFiles) {
    if (file.endsWith('.png')) {
      fs.unlinkSync(path.join(SCREENSHOT_DIR, file));
    }
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();
  const pageResults = [];

  // 1. Audit each page
  console.log('PHASE 1: PAGE-BY-PAGE AUDIT');
  console.log('-'.repeat(80));
  for (const route of ROUTES) {
    console.log(`\nAuditing: ${route.name} (${route.path})`);
    const report = await auditPage(page, route, pageResults);

    // Print immediate results
    console.log(`  STATUS: ${report.status}`);
    console.log(`  TITLE: ${report.title}`);
    console.log(`  LOAD TIME: ${report.loadTime}ms`);
    console.log(`  BROKEN IMAGES: ${report.brokenImages}`);
    console.log(`  CONSOLE ERRORS: ${report.consoleErrors}`);
    console.log(`  NETWORK ERRORS: ${report.networkErrors}`);
    console.log(`  CHASE REFERENCES: ${report.chaseReferences}`);
    console.log(`  $150K REFERENCES: ${report.price150kReferences}`);
    console.log(`  DATA ISSUES: ${report.dataIssues}`);
    console.log(`  PLACEHOLDER TEXT: ${report.placeholderText}`);
    console.log(`  LINKS: ${report.totalLinks} total / ${report.brokenLinks} broken`);
    if (report.issues.length > 0) {
      console.log(`  ISSUES:`);
      report.issues.forEach(i => console.log(`    - ${i}`));
    }
  }

  // 2. Navigation audit
  console.log('\n\nPHASE 2: NAVIGATION AUDIT');
  console.log('-'.repeat(80));
  const navReport = await auditNavigation(page, pageResults);
  console.log(`Desktop nav links found: ${navReport.desktopNav.length}`);
  console.log(`Mobile nav works: ${navReport.mobileNav.works}`);
  if (navReport.mobileNav.issues.length > 0) {
    console.log('Mobile nav issues:');
    navReport.mobileNav.issues.forEach(i => console.log(`  - ${i}`));
  }

  // 3. Form audit
  console.log('\n\nPHASE 3: FORM AUDIT');
  console.log('-'.repeat(80));
  const formReport = await auditForms(page);
  if (formReport.forms.length === 0) {
    console.log('No forms found on any page.');
  } else {
    for (const form of formReport.forms) {
      console.log(`\n${form.page} (${form.path}):`);
      console.log(`  Forms: ${form.formCount}, Inputs: ${form.inputCount}`);
      form.inputs.forEach(inp => {
        console.log(`    <${inp.tag}> type="${inp.type}" name="${inp.name}" placeholder="${inp.placeholder}" required=${inp.required} disabled=${inp.disabled}`);
      });
    }
  }

  // 4. 404 page test
  console.log('\n\nPHASE 4: 404 PAGE TEST');
  console.log('-'.repeat(80));
  await page.goto(`${BASE_URL}/nonexistent-page-xyz`, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(1000);
  const notFoundText = await page.evaluate(() => document.body?.innerText || '');
  const has404 = notFoundText.includes('404') || notFoundText.includes('not found') || notFoundText.includes('Not Found');
  console.log(`404 page renders correctly: ${has404}`);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '404_page.png'),
    fullPage: true,
  });

  // FINAL SUMMARY
  console.log('\n\n');
  console.log('='.repeat(80));
  console.log('FINAL AUDIT REPORT');
  console.log('='.repeat(80));

  let totalIssues = 0;
  let totalBrokenImages = 0;
  let totalConsoleErrors = 0;
  let totalNetworkErrors = 0;
  let total150kRefs = 0;
  let totalChaseRefs = 0;
  let totalDataIssues = 0;
  let totalPlaceholder = 0;
  let totalBrokenLinks = 0;

  for (const report of pageResults) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`PAGE: ${report.url}`);
    console.log(`${'='.repeat(60)}`);
    console.log(`STATUS: ${report.status}`);
    console.log(`TITLE: ${report.title}`);
    console.log(`LOAD TIME: ${report.loadTime}ms`);
    console.log(`BROKEN IMAGES: ${report.brokenImages}`);
    if (report.brokenImageDetails.length > 0) {
      report.brokenImageDetails.forEach(b => console.log(`  - ${b.src} (alt: ${b.alt})`));
    }
    console.log(`CONSOLE ERRORS: ${report.consoleErrors}`);
    if (report.consoleErrorDetails.length > 0) {
      report.consoleErrorDetails.forEach(e => console.log(`  - ${e.substring(0, 120)}`));
    }
    console.log(`NETWORK ERRORS: ${report.networkErrors}`);
    if (report.networkErrorDetails.length > 0) {
      report.networkErrorDetails.forEach(e => console.log(`  - ${e.substring(0, 120)}`));
    }
    console.log(`CHASE REFERENCES: ${report.chaseReferences}${report.chaseReferences > 0 ? ' (check context below)' : ''}`);
    if (report.chaseReferenceDetails.length > 0) {
      report.chaseReferenceDetails.forEach(d => console.log(`  - ${d}`));
    }
    console.log(`$150K REFERENCES: ${report.price150kReferences}${report.price150kReferences > 0 ? ' *** PRICING ERROR ***' : ''}`);
    if (report.price150kDetails.length > 0) {
      report.price150kDetails.forEach(d => console.log(`  - ${d}`));
    }
    console.log(`DATA ISSUES (NaN/undefined): ${report.dataIssues}`);
    if (report.dataIssueDetails.length > 0) {
      report.dataIssueDetails.forEach(d => console.log(`  - ${d}`));
    }
    console.log(`PLACEHOLDER TEXT: ${report.placeholderText}`);
    if (report.placeholderDetails.length > 0) {
      report.placeholderDetails.forEach(d => console.log(`  - ${d}`));
    }
    console.log(`LINKS: ${report.totalLinks} valid / ${report.brokenLinks} broken`);
    if (report.brokenLinkDetails.length > 0) {
      report.brokenLinkDetails.forEach(d => console.log(`  - ${d}`));
    }
    console.log(`SCREENSHOT: ${report.screenshotViewport}, ${report.screenshotFull}`);
    console.log(`CONTENT SUMMARY: ${report.contentSummary}`);
    if (report.issues.length > 0) {
      console.log(`ISSUES:`);
      report.issues.forEach(i => console.log(`  >>> ${i}`));
    } else {
      console.log(`ISSUES: None`);
    }

    totalIssues += report.issues.length;
    totalBrokenImages += report.brokenImages;
    totalConsoleErrors += report.consoleErrors;
    totalNetworkErrors += report.networkErrors;
    total150kRefs += report.price150kReferences;
    totalChaseRefs += report.chaseReferences;
    totalDataIssues += report.dataIssues;
    totalPlaceholder += report.placeholderText;
    totalBrokenLinks += report.brokenLinks;
  }

  console.log('\n\n');
  console.log('*'.repeat(80));
  console.log('AGGREGATE SUMMARY');
  console.log('*'.repeat(80));
  console.log(`Pages audited: ${pageResults.length}`);
  console.log(`Pages returning 200: ${pageResults.filter(r => r.status === 200).length}`);
  console.log(`Pages with errors: ${pageResults.filter(r => r.status !== 200).length}`);
  console.log(`Total issues flagged: ${totalIssues}`);
  console.log(`Total broken images: ${totalBrokenImages}`);
  console.log(`Total console errors: ${totalConsoleErrors}`);
  console.log(`Total network errors: ${totalNetworkErrors}`);
  console.log(`Total $150K references (PRICING ERROR): ${total150kRefs}`);
  console.log(`Total Chase references (contextual): ${totalChaseRefs}`);
  console.log(`Total data issues (NaN/undefined/Infinity): ${totalDataIssues}`);
  console.log(`Total placeholder text: ${totalPlaceholder}`);
  console.log(`Total broken links: ${totalBrokenLinks}`);
  console.log(`Average load time: ${Math.round(pageResults.reduce((s, r) => s + (r.loadTime || 0), 0) / pageResults.length)}ms`);
  console.log(`Slowest page: ${pageResults.sort((a, b) => (b.loadTime || 0) - (a.loadTime || 0))[0]?.name} (${pageResults[0]?.loadTime}ms)`);
  console.log(`Screenshots saved to: ${SCREENSHOT_DIR}`);
  console.log(`404 page test: ${has404 ? 'PASS' : 'FAIL'}`);
  console.log(`Mobile nav test: ${navReport.mobileNav.works ? 'PASS' : 'FAIL'}`);
  console.log(`Forms found: ${formReport.forms.length}`);

  // Critical issues summary
  const criticalIssues = [];
  if (total150kRefs > 0) criticalIssues.push(`CRITICAL: ${total150kRefs} references to $150K pricing (should be $600K)`);
  if (totalBrokenImages > 0) criticalIssues.push(`HIGH: ${totalBrokenImages} broken images found`);
  if (totalNetworkErrors > 0) criticalIssues.push(`HIGH: ${totalNetworkErrors} network errors (4xx/5xx)`);
  if (totalDataIssues > 0) criticalIssues.push(`HIGH: ${totalDataIssues} data rendering issues (NaN/undefined/Infinity)`);
  if (totalPlaceholder > 0) criticalIssues.push(`MEDIUM: ${totalPlaceholder} placeholder text instances`);
  if (totalBrokenLinks > 0) criticalIssues.push(`MEDIUM: ${totalBrokenLinks} broken/empty links`);
  if (!navReport.mobileNav.works) criticalIssues.push('MEDIUM: Mobile navigation not working');

  if (criticalIssues.length > 0) {
    console.log('\n');
    console.log('!'.repeat(80));
    console.log('CRITICAL ISSUES REQUIRING ATTENTION');
    console.log('!'.repeat(80));
    criticalIssues.forEach((issue, idx) => {
      console.log(`  ${idx + 1}. ${issue}`);
    });
  } else {
    console.log('\nNo critical issues found. Site passes audit.');
  }

  console.log('\n' + '='.repeat(80));
  console.log('AUDIT COMPLETE');
  console.log('='.repeat(80));

  await browser.close();
}

main().catch(err => {
  console.error('Audit script failed:', err);
  process.exit(1);
});
