import {test, expect} from '@playwright/test';

test('scroll', async({page})  => {
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(2000);
    const element = page.getByText('About Us', { exact: true });
    await element.scrollIntoViewIfNeeded();
    await page.screenshot({
        path: 'C:\\Users\\Achuth\\OneDrive\\Desktop\\Playwright_NodeJS\\SS\\ScrollScrenshot.jpeg'
       });

});