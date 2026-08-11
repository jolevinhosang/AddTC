describe('Add Testcases', () => {

  const qaMapping = {
    'Jolevin': 'Jolevin Armando Hosang — Quality Assurance',
    'Alfina': 'Alfina — Quality Assurance',
    'Faishal': 'Faishal Ghiffari — Quality Assurance',
    'Feby': 'Feby Febriyansyah — Quality Assurance',
    'Annash': 'Jamil Annashri — Quality Assurance',
    'Adi': 'Laksana Adi — Lead Quality Assurance',
    'Bram': 'Muhammad Bramantio Bimo Prakoso — Quality Assurance'
  }

  it('Create test cases from Excel', () => {

    cy.task('readExcel', 'testcases.xlsx').then((testCases) => {

      // Login
      cy.visit('https://azure.bakso.my.id/')
      
      cy.env(['EMAIL', 'PASSWORD']).then((env) => {
        cy.get('input[type="email"]').type(env.EMAIL)
        cy.get('input[type="password"]').type(env.PASSWORD)
      })

      cy.get('button[type="submit"]')
        .click()

      cy.get('h1')
        .should('contain', 'Dashboard QAs')


      // Loop through Excel rows
      cy.wrap(testCases).each((testCase) => {

        cy.visit('https://azure.bakso.my.id/test-plans/36')

        cy.contains('button', 'Add Test Case')
          .click()

        cy.get('h2')
          .should('contain', 'Add Test Case')


        // Scenario
        cy.xpath('//label[text()="Scenario "]/following-sibling::input')
          .type(testCase.Scenario)


        // Pre-conditions
        cy.xpath('//label[text()="Pre-conditions"]/following-sibling::div//div[contains(@class, "ql-editor")]')
          .type(testCase['Pre-conditions'])


        // Steps Action
        cy.xpath('//label[text()="Steps Action"]/following-sibling::div//div[contains(@class, "ql-editor")]')
          .type(testCase['Steps Action'])


        // Expected Result
        cy.xpath('//label[text()="Expected Result"]/following-sibling::div//div[contains(@class, "ql-editor")]')
          .type(testCase['Steps Result'])


        // Actual Result
        if (testCase['Actual Result']) {
          cy.xpath('//label[text()="Actual Result"]/following-sibling::div//div[contains(@class, "ql-editor")]')
            .type(testCase['Actual Result'])
        }


        // Test Data
        if (testCase['Test Data']) {
          cy.xpath('//label[text()="Test Data"]/following-sibling::div//div[contains(@class, "ql-editor")]')
            .type(testCase['Test Data'])
        }


        // Test Type
        cy.xpath('//label[text()="Test Type "]/following-sibling::select')
          .select(testCase['Test Type'])


        // Category
        cy.xpath('//label[text()="Category "]/following-sibling::select')
          .select('Acceptance')


        // Test Priority
        cy.xpath('//label[text()="Test Priority "]/following-sibling::select')
          .select(testCase['Test Priority'])


        // Platform
        cy.xpath('//label[text()="Platform"]/following-sibling::select')
          .select(testCase.Platform)


        // QA
        cy.xpath('//label[text()="QA"]/following-sibling::select')
          .select(qaMapping[testCase.QA])


        // Create
        cy.xpath('//button[contains(text(), "Create Case")]')
          .click()

      })

    })

  })

})