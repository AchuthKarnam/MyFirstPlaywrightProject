import {test, expect} from '@playwright/test';
test('Windows', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.cleartrip.com/");
    //await page.waitForTimeout(5000);
    await page.getByTestId('closeIcon').click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'img' }).click();
    await page.waitForTimeout(2000);
    const pages = await context.pages();
    console.log(pages.length);
});