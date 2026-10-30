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
    await context.pages()[0].bringToFront();  //brings the first page to front
   //await page.waitForTimeout(2000);
    await context.pages()[1].bringToFront();   //brings the second page to front
    await context.pages()[1].close();   //closes only the second page
    await page.waitForTimeout(2000);
    await browser.close();   //closes complete browser
});