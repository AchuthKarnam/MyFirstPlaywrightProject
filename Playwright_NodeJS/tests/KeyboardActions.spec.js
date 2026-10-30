import {test, expect} from '@playwright/test';
test('KeyboardActions', async({page}) => {
    await page.goto("https://cleartrip.com/");
    await page.waitForTimeout(10000);
    await page.reload();
    await page.waitForTimeout(2000);
    await page.fill('input[placeholder="Where from?"]', 'Bangalore');
    await page.keyboard.press('Tab');
    await page.keyboard.fill('Delhi');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+Alt+Delete');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Control+V');
});