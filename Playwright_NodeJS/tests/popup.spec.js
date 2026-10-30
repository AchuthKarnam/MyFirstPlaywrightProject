import {test, expect} from '@playwright/test';

test('popup', async({page}) => {
    await page.goto("https://www.cleartrip.com/");
    await page.waitForTimeout(2000);
    await page.getByTestId('closeIcon').click();
    await page.waitForTimeout(2000);
})