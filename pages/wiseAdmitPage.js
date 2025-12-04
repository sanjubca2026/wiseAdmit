class wiseAdmitLoginPages {
  constructor(page) {
    this.page = page;

    this.userTypeButton = page.getByRole('button', { name: 'Are you a student?' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginOption = page.getByRole('menuitem', { name: 'Login as a Student' });
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.loginButton1 =page.getByRole('button', { name: 'Log in' });
    this.passwordInput = page.locator('input[name="password"]');
    this.loginSubmitButton = page.getByRole('button', { name: 'Log in' });
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async clickUserType() {
    await this.userTypeButton.click();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async selectLoginOption() {
    await this.loginOption.click();
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async clickLogin() {
    await this.loginButton1.click();
  }
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginSubmit() {
    await this.loginSubmitButton.click();
  }
}

export { wiseAdmitLoginPages };
