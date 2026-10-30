import { chromium, test } from '@playwright/test';
//
test('Open Browser', async({page}) => {
    await page.waitForTimeout(2000);
    console.log("Opening Browser");
});

test('Open Browser 1', async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.waitForTimeout(2000);
    console.log("Opening Browser 1");
    //await browser.close();
});