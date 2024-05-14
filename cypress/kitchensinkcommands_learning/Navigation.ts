/**
 * 1.@go
 *    To go back or forward in the browser's history, use the cy.go() command.
 * 
 * 2.@reload
 *    To reload the page, use the cy.reload() command.
 * 
 * 3.@visit
 *    To visit a remote page, use the cy.visit() command.
 */
class NavigationKsc {
    navigationCommand() {
        cy.location('pathname').should('include', 'navigation')

        cy.go('back')
        cy.location('pathname').should('not.include', 'navigation')

        cy.go('forward')
        cy.location('pathname').should('include', 'navigation')

        // clicking back
        cy.go(-1)
        cy.location('pathname').should('not.include', 'navigation')

        // clicking forward
        cy.go(1)
        cy.location('pathname').should('include', 'navigation')

        cy.reload()

        // reload the page without using the cache
        cy.reload(true)
        cy.visit('https://example.cypress.io/commands/navigation', {
            timeout: 50000, // increase total time for the visit to resolve
            onBeforeLoad: function(contentWindow){
                // contentWindow is the remote page's window object
            },
            onLoad: function(contentWindow){
                // contentWindow is the remote page's window object
            }
        })
    }
}