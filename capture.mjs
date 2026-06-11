import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:5175/');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: './screenshot.png' });
await browser.close();
console.log('Screenshot saved to ./screenshot.png');
