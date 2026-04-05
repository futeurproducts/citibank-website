import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://citibank-website-git-staging-ci-33bbc9-futeur-products-projects.vercel.app';
const OUTPUT_DIR = './audit-screenshots';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function auditSite() {
  const browser = await chromium.launch({ headless: true });

  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });

  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2
  });

  const routes = [
    '/',
    '/how-it-works',
    '/impact',
    '/pilot',
    '/about',
    '/case-study',
    '/revolution',
    '/uss',
    '/demo',
    '/terms',
    '/privacy',
    '/security',
  ];

  for (const route of routes) {
    const safeName = route === '/' ? 'home' : route.replace(/\//g, '-').slice(1);

    for (const [label, ctx] of [['desktop', desktopContext], ['mobile', mobileContext]]) {
      const page = await ctx.newPage();

      try {
        const response = await page.goto(`${BASE_URL}${route}`, {
          waitUntil: 'networkidle',
          timeout: 30000
        });

        if (!response || response.status() === 404) {
          console.log(`SKIP: ${route} @ ${label} — 404`);
          await page.close();
          continue;
        }

        await page.waitForTimeout(2000);

        // Full page screenshot
        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${safeName}-${label}-full.png`),
          fullPage: true
        });

        // Above the fold
        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${safeName}-${label}-fold.png`),
          fullPage: false
        });

        // Extract page data
        const pageData = await page.evaluate(() => {
          const sections = [];
          const allElements = document.querySelectorAll('section, main > div, [id]');

          allElements.forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            const style = window.getComputedStyle(el);
            sections.push({
              index: i,
              tag: el.tagName,
              id: el.id || null,
              className: el.className?.toString().slice(0, 200) || null,
              top: Math.round(rect.top + window.scrollY),
              height: Math.round(rect.height),
              backgroundColor: style.backgroundColor,
              textContent: el.textContent?.slice(0, 300) || null
            });
          });

          return {
            title: document.title,
            url: window.location.href,
            totalHeight: document.body.scrollHeight,
            sectionCount: sections.length,
            sections
          };
        });

        fs.writeFileSync(
          path.join(OUTPUT_DIR, `${safeName}-${label}-data.json`),
          JSON.stringify(pageData, null, 2)
        );

        console.log(`OK: ${route} @ ${label} — ${pageData.sectionCount} sections, ${pageData.totalHeight}px`);

      } catch (err) {
        console.log(`ERROR: ${route} @ ${label} — ${err.message}`);
      }

      await page.close();
    }
  }

  await browser.close();
  console.log('\n=== AUDIT SCREENSHOTS COMPLETE ===');
  console.log(`Output: ${OUTPUT_DIR}/`);
}

auditSite().catch(console.error);
