import { chromium } from 'playwright';

const browser = await chromium.launch();

console.log('=== LOCALHOST ===');
const page1 = await browser.newPage();
page1.on('console', msg => console.log('[LOG]', msg.text()));
await page1.goto('http://localhost:5175/');
await page1.waitForLoadState('networkidle');
const storage1 = await page1.evaluate(() => ({
  localStorage: localStorage,
  sessionStorage: sessionStorage,
}));
console.log('localStorage:', storage1);
await page1.close();

console.log('\n=== NETWORK IP ===');
const page2 = await browser.newPage();
page2.on('console', msg => console.log('[LOG]', msg.text()));
await page2.goto('http://192.168.190.126:5175/');
await page2.waitForLoadState('networkidle');
const storage2 = await page2.evaluate(() => ({
  localStorage: localStorage,
  sessionStorage: sessionStorage,
}));
console.log('localStorage:', storage2);
await page2.close();

await browser.close();
