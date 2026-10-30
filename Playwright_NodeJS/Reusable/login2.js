import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.submitButton = page.getByRole('button', { name: 'Log in' });
    }

    async open() {
        await this.page.goto('https://demoblaze.com/');
    }

    async openLoginDialog() {
        await this.loginLink.click();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async expectLoginSuccess(username) {
        await expect(
            this.page.getByRole('link', { name: `Welcome ${username}` })
        ).toBeVisible();
    }
}
