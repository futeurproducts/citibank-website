import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'http://localhost:4174';
const OUTPUT_DIR = './audit-screenshots/phase1-after';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function capturePhase1() {
  const browser = await chromium.launch({ headless: true });

  const desktopCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });

  const mobileCtx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2
  });

  const routes = ['/', '/terms'];

  for (const route of routes) {
    const safeName = route === '/' ? 'home' : route.slice(1);

    for (const [label, ctx] of [['desktop', desktopCtx], ['mobile', mobileCtx]]) {
      const page = await ctx.newPage();
      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 15000 });
        await page.waitForTimeout(2000);

        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${safeName}-${label}-full.png`),
          fullPage: true
        });

        await page.screenshot({
          path: path.join(OUTPUT_DIR, `${safeName}-${label}-fold.png`),
          fullPage: false
        });

        console.log(`OK: ${route} @ ${label}`);
      } catch (err) {
        console.log(`ERROR: ${route} @ ${label} — ${err.message}`);
      }
      await page.close();
    }
  }

  await browser.close();
  console.log('\n=== PHASE 1 SCREENSHOTS COMPLETE ===');
}

capturePhase1().catch(console.error);
