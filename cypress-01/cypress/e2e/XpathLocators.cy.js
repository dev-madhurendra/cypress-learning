describe('E2E testing using XpathLocators', () => { 
    beforeEach(() => {
        cy.visit("https://dev-madhurendra.vercel.app/")
    })

    it('should render home icon', () => {
        cy.xpath('//div[@data-testid="social-medial-icons"]')
            .children('a').should('have.length', '9')
    });    
})