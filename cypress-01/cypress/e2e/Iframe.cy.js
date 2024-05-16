const cypress = require('cypress')
describe('E2E tests to handle iframe', () => { 
    it('handle iframes', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible').then(cy.wrap)
            .clear()
            .type("Hello, World !")
        
        cy.get("[aria-label='Bold']").click()
    });    
})