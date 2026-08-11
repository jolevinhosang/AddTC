# Cypress Test Automation

This project is a Cypress-based test automation suite that reads test cases from an Excel file and automatically adds them to the Azzure test management system.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository or download the source code.
2. Install the dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project if it doesn't exist.
2. Add your login credentials to the `.env` file:

```env
email=your_email@example.com
password=your_password
```

## Project Structure

- `cypress/e2e/`: Contains the Cypress test files (e.g., `add_tc.cy.js`).
- `test-data/`: Directory where the Excel file (`testcases.xlsx`) containing the test cases should be placed.
- `cypress.config.js`: Cypress configuration file, which includes the setup for reading Excel files and loading environment variables.

## Excel File Format

The test cases should be provided in an Excel file named `testcases.xlsx` inside the `test-data/` directory. The Excel sheet should contain the following columns:

- `Scenario`
- `Pre-conditions`
- `Steps Action`
- `Steps Result` (Expected Result)
- `Actual Result` (Optional)
- `Test Data` (Optional)
- `Test Type`
- `Test Priority`
- `Platform`
- `QA` (e.g., 'Jolevin')

## Running the Tests

To open the Cypress Test Runner interactively:

```bash
npx cypress open
```

To run the tests in headless mode:

```bash
npx cypress run
```

## Dependencies Used

- [cypress](https://www.cypress.io/): E2E testing framework.
- [cypress-xpath](https://github.com/cypress-io/cypress-xpath): Adds XPath command support to Cypress.
- [xlsx](https://www.npmjs.com/package/xlsx): Used to read and parse the Excel file containing test cases.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from the `.env` file.
