import {test} from '@playwright/test';

test('ActionMethods', async({page}) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Search' }).type("Selenium");
    await page.waitForTimeout(2000);
   // await page.getByRole('combobox', { name: 'Search' }).clear();
    //await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Search' }).fill("Playwright");
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Search' }).clear();
    await page.waitForTimeout(2000);

    await page.getByRole('combobox', { name: 'Search' }).type("Selenium");
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Search' }).press("Enter");
    await page.waitForTimeout(2000);
    

});
