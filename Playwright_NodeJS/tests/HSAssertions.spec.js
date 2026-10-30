import {expect, test} from '@playwright/test';
test('HSAssertion',async({page}) => {
    await page.goto("https://www.demoblaze.com/");
    await page.waitForTimeout(2000);
    const value = await page.locator("//a[normalize-space()='Samsung galaxy s6']").textContent();
    await expect.soft(page.locator("//a[normalize-space()='Samsung galaxy s6']")).toHaveText("Samsung galaxy s6");
    console.log(value);
});