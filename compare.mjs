import { chromium } from 'playwright';

const browser = await chromium.launch();

// Capture localhost
const page1 = await browser.newPage();
await page1.goto('http://localhost:5175/');
await page1.waitForLoadState('networkidle');
await page1.screenshot({ path: './screenshot-localhost.png' });
await page1.close();

// Capture network IP
const page2 = await browser.newPage();
await page2.goto('http://192.168.190.126:5175/');
await page2.waitForLoadState('networkidle');
await page2.screenshot({ path: './screenshot-network.png' });
await page2.close();

await browser.close();
console.log('Both screenshots saved');
