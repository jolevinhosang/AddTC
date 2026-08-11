describe('Read Test Cases from Excel', () => {

  it('should read test cases', () => {

    cy.task('readExcel', 'testcases.xlsx').then((testCases) => {

      cy.log(`Total test cases: ${testCases.length}`)

      console.log(testCases)

      expect(testCases.length).to.be.greaterThan(0)

      cy.log(testCases[0].Scenario)
      cy.log(testCases[0]['Pre-conditions'])
      cy.log(testCases[0]['Steps Action'])
      cy.log(testCases[0]['Steps Result'])
      cy.log(testCases[0]['Test Type'])
      cy.log(testCases[0]['Test Priority'])
      cy.log(testCases[0].Platform)
      cy.log(testCases[0].QA)

    })
  })

})