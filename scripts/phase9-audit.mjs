#!/usr/bin/env node
/**
 * Phase 9 Final Playwright Audit
 * Visits all main pages + legal pages, checks for:
 * - HTTP 200
 * - Page title is set (not generic/empty)
 * - No "$150K" or "$150,000"
 * - No "redeemable", "refundable", "money back", "guarantee" (except Terms legal use)
 * - No "LUMIQ x Citi" (the multiplication sign variant)
 * - No "EXECUTIVE EDITION"
 * - No NaN/undefined/Infinity in rendered text
 * - Takes full-page screenshots
 */

import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE = 'http://localhost:4175';
const SCREENSHOT_DIR = join(process.cwd(), 'audit-screenshots', 'phase9-final');

mkdirSync(SCREENSHOT_DIR, { recursive: true });

const PAGES = [
  { path: '/', name: 'home', expectedTitleContains: 'LUMIQ' },
  { path: '/about', name: 'about', expectedTitleContains: 'LUMIQ' },
  { path: '/pilot', name: 'pilot', expectedTitleContains: 'LUMIQ' },
  { path: '/how-it-works', name: 'how-it-works', expectedTitleContains: 'LUMIQ' },
  { path: '/case-study', name: 'case-study', expectedTitleContains: 'Results' },
  { path: '/terms', name: 'terms', expectedTitleContains: 'Terms' },
  { path: '/privacy', name: 'privacy', expectedTitleContains: 'Privacy' },
  { path: '/security', name: 'security', expectedTitleContains: 'Security' },
];

// Forbidden patterns
const FORBIDDEN = [
  { pattern: /\$150[,.]?000|\$150K/gi, label: '$150K pricing (should be $600K)', allowOn: [] },
  { pattern: /EXECUTIVE\s+EDITION/gi, label: 'EXECUTIVE EDITION', allowOn: [] },
  { pattern: /LUMIQ\s*[x\u00d7\u2715\u2716]\s*Citi/gi, label: 'LUMIQ x Citi (should be LUMIQ AI)', allowOn: [] },
  { pattern: /\bNaN\b/g, label: 'NaN in rendered text', allowOn: [] },
  { pattern: /\bundefined\b/g, label: 'undefined in rendered text', allowOn: [] },
  { pattern: /\bInfinity\b/g, label: 'Infinity in rendered text', allowOn: [] },
];

// These patterns are only forbidden on non-Terms pages
const CONDITIONAL_FORBIDDEN = [
  { pattern: /\bredeemable\b/gi, label: 'redeemable', allowOn: ['/terms'] },
  { pattern: /\brefundable\b/gi, label: 'refundable', allowOn: ['/terms'] },
  { pattern: /\bmoney\s*back\b/gi, label: 'money back', allowOn: ['/terms'] },
  { pattern: /\bguarantee\b/gi, label: 'guarantee', allowOn: ['/terms'] },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const results = [];

  for (const page of PAGES) {
    const url = `${BASE}${page.path}`;
    console.log(`\n--- Auditing ${page.name} (${url}) ---`);

    const tab = await context.newPage();
    const result = {
      name: page.name,
      path: page.path,
      status: null,
      title: null,
      titlePass: false,
      violations: [],
      screenshot: null,
    };

    try {
      const response = await tab.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      result.status = response?.status();

      // Wait for React to render
      await tab.waitForTimeout(1500);

      // Get title
      result.title = await tab.title();
      result.titlePass = result.title && result.title.length > 5 &&
        result.title.toLowerCase().includes(page.expectedTitleContains.toLowerCase());

      // Get full page text
      const bodyText = await tab.evaluate(() => document.body?.innerText || '');

      // Check forbidden patterns
      for (const rule of FORBIDDEN) {
        const matches = bodyText.match(rule.pattern);
        if (matches && matches.length > 0) {
          result.violations.push(`FORBIDDEN: ${rule.label} (found ${matches.length}x)`);
        }
      }

      // Check conditional forbidden
      for (const rule of CONDITIONAL_FORBIDDEN) {
        if (!rule.allowOn.includes(page.path)) {
          const matches = bodyText.match(rule.pattern);
          if (matches && matches.length > 0) {
            result.violations.push(`FORBIDDEN: ${rule.label} (found ${matches.length}x)`);
          }
        }
      }

      // Take screenshot
      const screenshotPath = join(SCREENSHOT_DIR, `${page.name}.png`);
      await tab.screenshot({ path: screenshotPath, fullPage: true });
      result.screenshot = screenshotPath;

      // Also take a mobile screenshot
      await tab.setViewportSize({ width: 375, height: 812 });
      await tab.waitForTimeout(500);
      const mobileScreenshotPath = join(SCREENSHOT_DIR, `${page.name}-mobile.png`);
      await tab.screenshot({ path: mobileScreenshotPath, fullPage: true });

    } catch (err) {
      result.violations.push(`ERROR: ${err.message}`);
    }

    await tab.close();
    results.push(result);
  }

  await browser.close();

  // Report
  console.log('\n\n========================================');
  console.log('  PHASE 9 FINAL AUDIT REPORT');
  console.log('========================================\n');

  let totalViolations = 0;
  let totalPass = 0;

  for (const r of results) {
    const statusOk = r.status === 200;
    const titleOk = r.titlePass;
    const noViolations = r.violations.length === 0;
    const pass = statusOk && titleOk && noViolations;

    if (pass) totalPass++;
    totalViolations += r.violations.length;

    console.log(`${pass ? 'PASS' : 'FAIL'} | ${r.name.padEnd(15)} | HTTP ${r.status || 'N/A'} | Title: "${r.title || 'N/A'}" ${titleOk ? '(OK)' : '(FAIL)'}`);
    if (r.violations.length > 0) {
      for (const v of r.violations) {
        console.log(`  -> ${v}`);
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`  TOTAL: ${totalPass}/${results.length} pages PASS`);
  console.log(`  VIOLATIONS: ${totalViolations}`);
  console.log(`  Screenshots: ${SCREENSHOT_DIR}`);
  console.log(`========================================\n`);

  // Write JSON report
  const reportPath = join(SCREENSHOT_DIR, 'audit-report.json');
  writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`Report written to: ${reportPath}`);

  // Exit with error code if any failures
  process.exit(totalViolations > 0 || totalPass < results.length ? 1 : 0);
}

run().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
