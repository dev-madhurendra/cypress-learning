describe('E2E tests for window handling', () => {
    it('should handle windows', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");

        //NOTE - Without clicking the link directly removing the target attr from the element
        cy.get('.example > a')
            // .should('have.attr', 'attr', 'target')
            .invoke('removeAttr', 'target').click()

        cy.location('pathname').should('include', '/new')

        //NOTE - Go back to the parent tab
        cy.wait(5000)
        cy.location('pathname').should('include', 'navigation')
        cy.go('back')
    });
})