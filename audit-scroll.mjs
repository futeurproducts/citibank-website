/**
 * Scroll-triggered screenshot audit
 * Scrolls through each page to trigger framer-motion whileInView animations,
 * then takes full-page screenshot after all content is visible.
 * Also checks for the broken images on Case Study page.
 */
import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = 'https://citi-website-staging.vercel.app';
const SCREENSHOT_DIR = '/Users/devaccount/citibank-website/audit-screenshots';

const ROUTES = [
  { path: '/', name: 'index_home' },
  { path: '/about', name: 'about' },
  { path: '/impact', name: 'impact' },
  { path: '/pilot', name: 'pilot' },
  { path: '/case-study', name: 'case_study' },
  { path: '/how-it-works', name: 'how_it_works' },
  { path: '/uss', name: 'uss' },
];

async function scrollToBottom(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    let currentPosition = 0;

    while (currentPosition < scrollHeight) {
      window.scrollTo(0, currentPosition);
      currentPosition += viewportHeight * 0.7;
      await delay(300);
    }

    // Scroll to absolute bottom
    window.scrollTo(0, scrollHeight);
    await delay(500);

    // Scroll back to top
    window.scrollTo(0, 0);
    await delay(300);
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  for (const route of ROUTES) {
    console.log(`Scrolling & capturing: ${route.name} (${route.path})`);

    await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);

    // Scroll through entire page to trigger all whileInView animations
    await scrollToBottom(page);
    await page.waitForTimeout(1000);

    // Now take full page screenshot with all animations triggered
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${route.name}_scrolled_full.png`),
      fullPage: true,
    });

    console.log(`  Saved: ${route.name}_scrolled_full.png`);
  }

  // Special: check broken images on Case Study
  console.log('\nChecking broken images on /case-study...');
  await page.goto(`${BASE_URL}/case-study`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  await scrollToBottom(page);
  await page.waitForTimeout(1000);

  const brokenImgs = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    const results = [];
    imgs.forEach(img => {
      const rect = img.getBoundingClientRect();
      results.push({
        src: img.src,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: rect.width,
        displayHeight: rect.height,
        broken: img.naturalWidth === 0 && !img.src.startsWith('data:'),
        visible: rect.width > 0 && rect.height > 0,
      });
    });
    return results;
  });

  console.log(`\nAll images on /case-study (${brokenImgs.length} total):`);
  brokenImgs.forEach((img, i) => {
    const status = img.broken ? 'BROKEN' : 'OK';
    console.log(`  ${i+1}. [${status}] ${img.src}`);
    console.log(`     alt="${img.alt}" natural=${img.naturalWidth}x${img.naturalHeight} display=${Math.round(img.displayWidth)}x${Math.round(img.displayHeight)} visible=${img.visible}`);
  });

  // Check USS page for /demo link (route is commented out)
  console.log('\nChecking for dead /demo links...');
  for (const route of ['/uss', '/', '/about', '/pilot', '/how-it-works', '/case-study']) {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    const demoLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a');
      return Array.from(links)
        .filter(a => a.href.includes('/demo'))
        .map(a => ({
          href: a.href,
          text: (a.textContent || '').trim().substring(0, 60),
          visible: a.getBoundingClientRect().width > 0,
        }));
    });

    if (demoLinks.length > 0) {
      console.log(`  ${route}: ${demoLinks.length} /demo link(s) found:`);
      demoLinks.forEach(l => console.log(`    "${l.text}" -> ${l.href} (visible: ${l.visible})`));
    }
  }

  // Check for /model-governance-framework link (on Pilot page hero)
  console.log('\nChecking for dead internal links...');
  const allRoutes = ['/', '/about', '/revolution', '/impact', '/pilot', '/uss', '/how-it-works', '/case-study'];
  for (const route of allRoutes) {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    const internalLinks = await page.evaluate((baseUrl) => {
      const links = document.querySelectorAll('a');
      const base = new URL(baseUrl);
      return Array.from(links)
        .filter(a => {
          try {
            const url = new URL(a.href);
            return url.origin === base.origin;
          } catch { return false; }
        })
        .map(a => ({
          href: new URL(a.href).pathname,
          text: (a.textContent || '').trim().substring(0, 60),
        }));
    }, BASE_URL);

    const validPaths = ['/', '/about', '/revolution', '/impact', '/pilot', '/uss', '/how-it-works', '/case-study', '/terms', '/privacy', '/security'];
    const deadLinks = internalLinks.filter(l => {
      const path = l.href.split('#')[0].split('?')[0];
      return path && !validPaths.includes(path) && path !== '';
    });

    if (deadLinks.length > 0) {
      console.log(`  ${route}: ${deadLinks.length} potentially dead internal link(s):`);
      deadLinks.forEach(l => console.log(`    "${l.text}" -> ${l.href}`));
    }
  }

  await browser.close();
  console.log('\nScroll audit complete.');
}

main().catch(err => {
  console.error('Scroll audit failed:', err);
  process.exit(1);
});
