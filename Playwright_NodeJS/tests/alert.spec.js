import {test, expect} from '@playwright/test';

test('alert', async({page}) => {
    await page.goto("https://demo.guru99.com/test/delete_customer.php");
    await page.waitForTimeout(2000);
    //await page.getByRole('button', { name: 'Reset' }).click();
    //await page.waitForTimeout(2000);
    await page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        //await dialog.dismiss();
    });
    await page.getByRole('link', { name: 'Insurance Project' }).click();
    await page.waitForTimeout(2000);

});