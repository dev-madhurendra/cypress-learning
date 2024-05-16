describe('Test UI elements', () => { 
    it('Checking radio buttons', () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")

        // visibility of radio buttons
        cy.get('input[value="male"]').should('be.visible')
        cy.get('input[value="female"]').should('be.visible')

        // selecting the radio button
        cy.get('input[value="male"]').check().should('be.checked')
        cy.get('input[value="female"]').should('not.be.checked')
    });    

    it.only('Checking checkboxes', () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")

        // checkboxes is visible or not
        cy.get('input[value="Automation"]').should('be.visible')
        cy.get('input[value="Performance"]').should('be.visible')

        // check the first box and verify
        cy.get('input[value="Automation"]').check().should('be.checked')

        // verify that second checkbox is not checked
        cy.get('input[value="Performance"]').should('not.be.checked')

        // check the second checkbox and verify
        cy.get('input[value="Performance"]').check().should('be.checked')

        // unselecting checkbox
        cy.get('input[value="Automation"]').uncheck().should('not.be.checked')
        cy.get('input[value="Performance"]').uncheck().should('not.be.checked')

        // select all the checkboxes
        cy.get('input[type="checkbox"]').check().should('be.checked')

        // unselect all the checkboxes
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

        // select first checkbox
        cy.get('input[type="checkbox"]').first().check().should('be.checked')

        // select last checkboxe
        cy.get('input[type="checkbox"]').last().check().should('be.checked')

        // select checkbox by index
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
    });
})