import {test} from '@playwright/test';
test('AM2', async({page}) => {
    await page.goto("https://www.demoblaze.com/");
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.waitForTimeout(2000);
    await page.locator('#loginusername').fill("testuser");
    await page.waitForTimeout(2000);
    const value = await page.locator('#loginusername').inputValue();
    console.log("The value of the input field is: " + value);
    await page.waitForTimeout(2000);

});
