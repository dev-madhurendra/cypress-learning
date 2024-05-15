/**
 * 1. @window
 *    To get the global window object, use the cy.window() command.
 * 
 * 2. @document
 *    To get the document object, use the cy.document() command.
 * 
 * 3. @title
 *    To get the title, use the cy.title() command.
 */

class WindowKsc {
    windowCommand() {
        cy.window().should('have.property', 'top')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Kitchen Sink')
    }
}