import { test, expect } from '@playwright/test';
import { wiseAdmitLoginPages } from '../pages/wiseAdmitPage';
import { studentUser } from '../fixtures/userData';


test.describe('WiseAdmin Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new wiseAdmitLoginPages(page);
  });

  test('POSITIVE: Login as student with valid details @smoke', async ({ page }) => {
    try {

         const { email, password } = studentUser.valid;


      await loginPage.navigate("https://www.wiseadmit.io/");
      await loginPage.clickUserType();
      await loginPage.clickLoginButton();
      await loginPage.selectLoginOption();  
      await loginPage.fillEmail(email);
      await loginPage.clickLogin();
      await loginPage.fillPassword(password);
      await loginPage.clickLoginSubmit();
      await expect(page.locator('div').filter({ hasText: /^Sanju Kumari$/ }).nth(2)).toBeVisible();


    } catch (error) {
      console.error('POSITIVE login test failed:', error);
      throw error; // rethrow to mark the test as failed
    }
  });

  test('NEGATIVE: Login with invalid Email should show error message @regression', async ({ page }) => {
    try {


         const { email } = studentUser.invalid;

      await loginPage.navigate("https://www.wiseadmit.io/");
      await loginPage.clickUserType();
      await loginPage.clickLoginButton();
      await loginPage.selectLoginOption();  
      await loginPage.fillEmail(email);
      await loginPage.clickLogin();
      await expect(page.getByRole('paragraph')).toContainText('Invalid Email');

    } catch (error) {
      console.error('NEGATIVE login test failed:', error);
      throw error;
    }
  });

  test('NEGATIVE:Login with invalid password should show error message @regression', async ({ page }) => {
    try {


        const { email, } = studentUser.valid;

         const { password } = studentUser.invalid;

      await loginPage.navigate("https://www.wiseadmit.io/");
      await loginPage.clickUserType();
      await loginPage.clickLoginButton();
      await loginPage.selectLoginOption();  
      await loginPage.fillEmail(email);
      await loginPage.clickLogin();
      await loginPage.fillPassword(password);
      await loginPage.clickLoginSubmit();
      await expect(page.getByRole('paragraph')).toContainText('Invalid Credentials');

    } catch (error) {
      console.error('Required fields validation test failed:', error);
      throw error;
    }
  });
});