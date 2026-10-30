import { chromium, test } from '@playwright/test';

test('Open Browser', async({page}) => {
    await page.goto("https://www.cleartrip.com/");
    await page.waitForTimeout(2000);
    await console.log("Title of the page is:" + await page.title());
    await console.log("URL of the page is:" + await page.url());
    //await console.log("Page source of the page is:" + await page.content());
    const windowname = await page.evaluate(() => window.name);
    await console.log(windowname);
    console.log("Opened Browser, captured the title, URL, page source and window name");
    
});