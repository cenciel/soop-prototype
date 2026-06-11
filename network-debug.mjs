import { chromium } from 'playwright';

const browser = await chromium.launch();

console.log('=== NETWORK IP - Checking requests ===');
const page = await browser.newPage();

page.on('response', response => {
  if (response.url().includes('192.168') || response.url().includes('localhost')) {
    console.log(`[${response.status()}] ${response.url()}`);
  }
});

await page.goto('http://192.168.190.126:5175/', { waitUntil: 'networkidle' });

const rootContent = await page.content();
console.log('\n=== First 500 chars of HTML ===');
console.log(rootContent.substring(0, 500));

await browser.close();
