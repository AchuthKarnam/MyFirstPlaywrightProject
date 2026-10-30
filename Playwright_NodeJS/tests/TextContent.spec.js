import {test} from '@playwright/test';
test('AM2', async({page}) => {
    await page.goto("https://www.demoblaze.com/");
    await page.waitForTimeout(2000);
    const value = await page.locator("//a[normalize-space()='Samsung galaxy s6']").textContent();
    console.log(value);
    const value2 = await page.locator("//a[normalize-space()='Samsung galaxy s6']").innerText();
    console.log(value2);
    await page.waitForTimeout(2000);
    const value3 = await page.getByRole('link', { name: 'Phones' }).allTextContents();
    console.log(value3);
    const value4 = await page.getByRole('link', { name: 'Phones' }).allInnerTexts();
    console.log(value4);
    await page.waitForTimeout(2000);
    const value5 = await page.getByRole('link', { name: 'Phones' }).getAttribute('href');
    console.log(value5);
    await page.waitForTimeout(2000);
});
