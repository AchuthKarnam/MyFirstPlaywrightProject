import {test, expect} from '@playwright/test';

test('Frames', async({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    await page.waitForTimeout(2000);
    const frame2 = await page.frame('packageListFrame');
    await frame2?.locator("a[href='java/applet/package-frame.html']").click();
    await page.waitForTimeout(2000);
});