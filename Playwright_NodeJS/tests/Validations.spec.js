 import {test, expect} from '@playwright/test';
  test('Validations', async({page}) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.waitForTimeout(2000);
    await page.locator('input[name="username"]').fill("testuser");
    await page.waitForTimeout(2000);
    await page.locator('input[name="password"]').fill("testuser");
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    await page.waitForTimeout(2000);
    console.log("Accounts Overview is visible");
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Log Out' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
    console.log("Test completed successfully");
  });