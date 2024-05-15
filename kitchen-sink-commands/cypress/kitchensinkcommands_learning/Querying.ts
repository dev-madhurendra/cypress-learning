/**
 * @Querying 
 *   1. @get
 *       - we can test with id
 *       - We can test with class
 *       - We can test with css selector
 *       - We can test with xpath
 *   2. @contains
 *       - we can pass a regexp to `.contains()
 *       - We can find elements by their content using cy.contains()
 *       -  We can pass the selector ot .contains()
 *   3. @within
 *      - We can find elements within a specific DOM element .within()
 * 
 */

export class QueryingKsc {
    
    visitUrl(url: string) {
        cy.visit(url);
    }

    getCommand() {
        // test with id
        cy.get('#query-btn').should('contain', 'Button')

        // test with class
        cy.get('.query-btn').should('contain', 'Button')

        // test with css selector
        cy.get('#querying .well>button:first').should('contain', 'Button')

        // test with xpath
        cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    }

    containsCommand() {

        
        cy.get('.query-list')
            .contains('bananas').should('have.class', 'third')
        

        cy.get('.query-list')
            .contains(/^b\w+/).should('have.class', 'third')
        
        // get the DOM with the selector contains regular exp
        cy.get('#querying')
            .contains('ul', 'oranges')
            .should('have.class', 'query-list')
    }

    withinCommand() {
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    }

}

