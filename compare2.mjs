import { chromium } from 'playwright';

const browser = await chromium.launch();

// 동일한 조건으로 캡처
const urls = [
  'http://localhost:5175/',
  'http://192.168.190.126:5175/'
];

for (const url of urls) {
  const page = await browser.newPage({ viewport: { width: 540, height: 960 } });
  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000); // 렌더링 완료 대기
  
  const html = await page.locator('main').innerHTML();
  console.log(`\n=== ${url} ===`);
  console.log('Active tab class:', await page.locator('[class*="active"]').getAttribute('class'));
  console.log('Main className:', await page.locator('main').getAttribute('class'));
  
  await page.close();
}

await browser.close();
