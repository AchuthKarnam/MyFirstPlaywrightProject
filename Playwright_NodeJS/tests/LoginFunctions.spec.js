import {test, expect} from '@playwright/test';
import {invokeApp,navigateTologinPage,performLogin,verifyLoginSuccess} from '../Reusable/login.js';

test('LoginFunctions', async({page}) => {

   await invokeApp(page);
   await navigateTologinPage(page);
   await performLogin(page);
   await verifyLoginSuccess(page);


});