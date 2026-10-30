import {chromium, test} from '@playwright/test';
test('context of pages', async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.cleartrip.com/");
    await page.waitForTimeout(3000);
    await console.log(await context.pages());
    await console.log(await context.pages()[0]);

});

