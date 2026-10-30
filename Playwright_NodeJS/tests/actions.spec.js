import {test} from '@playwright/test';
test('Actions', async({page}) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    await page.goto("https://www.oracle.com/");
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.goForward();
    await page.waitForTimeout(2000);
});