# wiseAdmit

This is an automation testing project built to validate the sign-in process and core workflows of the WiseAdmit platform. It utilizes **Playwright**, a powerful end-to-end testing framework, to ensure the application's features function correctly across various browsers and environments.

## Features

- Automated login and secure sign-in workflows
- End-to-end UI and functionality testing
- Support for headless (no UI) and headed (with UI) browser testing
- Generation of detailed, insightful test reports

## Prerequisites

- Node.js (version X or higher)
- npm package manager
- Browser drivers supported by Playwright

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sanjubca2026/wiseAdmit.git
```

### 2. Navigate to the project directory

```bash
cd wiseAdmit
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright

Playwright is required to run the tests. Install Playwright and its browsers using:

```bash
npx playwright install
```

**Note:** Running `npx playwright install` ensures all necessary browser binaries (Chromium, Firefox, WebKit) are downloaded and ready for testing.

## Running Tests

### Execute all tests

```bash
npx playwright test
```

### Run specific test files

```bash
npx playwright test path/to/test-file.spec.js
```

### Run tests with browser UI (headed mode)

```bash
npx playwright test --headed
```

### Generate and view test reports

```bash
npx playwright show-report
```

## Configuration & Environment Variables

- Ensure your `.env` file contains all necessary environment variables for authentication and configuration.
- Update test locators and scripts as the application UI evolves to maintain test accuracy.

## Additional Notes

- Regularly update tests to reflect UI changes.
- Refer to [Playwright documentation](https://playwright.dev/docs/intro) for advanced configurations and usage.

---

*This README provides a comprehensive overview of the `wiseAdmit` automation project utilizing Playwright for end-to-end testing. For further assistance, please contact the project maintainer.*


## Test cases : 

Link: https://docs.google.com/spreadsheets/d/1z_ixVx33wOi5-WhtR0qR_RQMvDrEdm4HOm7JoyT63po/edit?usp=sharing


## Test report:

WiseAdmit Sign-In Automation Test Report

Project: QA Automation Assessment – Sign-In (POM)
Tested By: Sanju Kumari
Date: 2025-12-04
Automation Tool: Playwright
Framework: POM (Page Object Model)

Test Summary

## Test Execution Summary

| Total Tests | Passed | Failed | Skipped | Remarks                                      |
|-------------|--------|--------|---------|----------------------------------------------|
| 3           | 3      | 0      | 0       | All Sign-In test cases passed successfully.  |


Test Case Details

## Test Case Results

| TC ID | Description                          | Result | Remarks                         |
|-------|--------------------------------------|--------|----------------------------------|
| TC001 | Login with valid student credentials | Passed | Username displayed correctly     |
| TC002 | Login with invalid email             | Passed | Correct error message shown      |
| TC003 | Login with invalid password          | Passed | Correct error message shown      |

## Observations

- **Positive scenarios work as expected**
  - All valid login flows pass without issues.

- **Negative scenarios show correct error handling**
  - Appropriate error messages are displayed for invalid inputs.

- **Credentials are securely managed**
  - Sensitive data is stored in `userData.js` (fixtures) and not directly exposed in the code.


## Potential Break Points for Sign-In (User Perspective)

- **Incorrect or Forgotten Credentials**
  - Users may enter the wrong email/password or forget their credentials.
  - Unclear or missing error messages can cause confusion.

- **Website or Server Issues**
  - If the WiseAdmit site is down, slow, or the server becomes unresponsive, users cannot log in.

- **Browser Compatibility Problems**
  - Login page elements (buttons, input fields, validation) may not work properly on certain browsers or devices.

- **Network Connectivity Problems**
  - Slow or unstable internet connections can cause login requests to fail or timeout.

- **Changes in Security Requirements**
  - Password policy updates, token changes, or additional verification steps may block users if not implemented properly.

If the system suddenly adds new security layers, like CAPTCHA, two-factor authentication (2FA), or stricter password rules, users may fail to log in if they are unaware of the changes.

## Suggested Website Improvements

- **Real-time email format validation**
  - Automatically detect invalid email formats before form submission.

- **Better mobile login experience**
  - Improve responsiveness and UI layout for smaller screens.

- **Show a loading indicator during login**
  - Helps users understand that authentication is in progress.

- **Clear validation message handling**
  - Ensure error messages disappear or update correctly when the user corrects an invalid password or email.

- **Add social or third-party login options**
  - Options like Google, Facebook, or Apple Sign-In for faster and more convenient access.
