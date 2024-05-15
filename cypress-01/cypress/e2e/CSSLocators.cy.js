describe('E2E testing using CSSLocators', () => { 
    beforeEach(() => {
        cy.visit("https://dev-madhurendra.vercel.app/")
    })

    it('should identify using id', () => {
        cy.get('#home').children('div').should('have.length', 2);
    });
    it('should identify using class', () => {
        cy.get('.reveal').should('have.length', 6);
    });
    it('should identify using attr', () => {
        cy.get('div[data-testid="icon-component-home"]').should('be.visible')
    });    
})