import { expect } from '@playwright/test';

export async function invokeApp(page) {
    await page.goto("https://demoblaze.com/");
}

export async function navigateTologinPage(page) {
    await page.getByRole('link', { name: 'Log in' }).click();
}

export async function performLogin(page) {
    await page.locator('#loginusername').fill("achuth");
    await page.locator('#loginpassword').fill("achuth");
    await page.getByRole('button', { name: 'Log in' }).click();
}

export async function verifyLoginSuccess(page) {
    await expect(page.getByRole('link', { name: 'Welcome achuth' })).toBeVisible();
}