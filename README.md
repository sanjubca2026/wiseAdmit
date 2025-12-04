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

Total Tests	Passed	Failed	Skipped	Remarks
3	3	0	0	All Sign-In test cases passed successfully.

Test Case Details
TC ID	Description	Result	Remarks
TC001	Login with valid student credentials	Passed	Username displayed correctly
TC002	Login with invalid email	Passed	Correct error message shown
TC003	Login with invalid password	Passed	Correct error message shown


## Observations

Positive scenarios pass as expected.
Negative scenarios display appropriate error messages.
Credentials are kept secure using fixture userData.js and are not exposed in code.

## Potential Break Points for Sign-In in Future

Change in login page URL or flow.
Change in element locators (like buttons, input fields).
Backend validation changes (error messages).
Session or authentication token issues.
Network or API failures.

## Suggested Website Improvements

Add “Show Password” toggle for password field.
Provide real-time email format validation.
Add “Forgot Password” link clearly visible.
Optimize for mobile login experience.
Display loading indicator on login submission.