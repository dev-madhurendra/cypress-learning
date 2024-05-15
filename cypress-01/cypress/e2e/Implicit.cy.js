describe('E2E testing for Assertions', () => { 
    
    beforeEach(() => {
        cy.visit("https://dev-madhurendra.vercel.app/")
    })

    it('Implicit Assertions-1', () => {
        // should and
        // checking the particular string is part of url or not
        
        cy.url().should('include', 'dev-madhurendra')
        cy.url().should('eq', 'https://dev-madhurendra.vercel.app/')
        cy.url().should('contain', 'dev-madhurendra')

        cy.url().should('include', 'dev-madhurendra')
            .should('eq', 'https://dev-madhurendra.vercel.app/')
            .should('contain', 'dev-madhurendra')

    });

    it('Implicit Assertions-2', () => {
        // should and
        // checking the particular string is part of url or not
        
        cy.url().should('include', 'dev-madhurendra')
            .should('eq', 'https://dev-madhurendra.vercel.app/')
            .should('contain', 'dev-madhurendra')
    });

    it('Implicit Assertions-3', () => {
        // should and
        // checking the particular string is part of url or not
        
        cy.url().should('include', 'dev-madhurendra')
            .and('eq', 'https://dev-madhurendra.vercel.app/')
            .and('contain', 'dev-madhurendra')
            .and('not.contain', 'devmadhurendra')
    });
 })