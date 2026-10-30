import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('testuser');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('testuser');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Account' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Balance*' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Available Amount' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '*Balance includes deposits' })).toBeVisible();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
});