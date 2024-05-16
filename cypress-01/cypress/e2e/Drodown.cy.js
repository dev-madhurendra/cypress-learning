describe('E2E tests for handling drop down', () => { 
    it('select dropdown', () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get('select#testingDropdown')
            .select('Manual Testing')
            .should('have.value', 'Manual Testing')
    });    
})