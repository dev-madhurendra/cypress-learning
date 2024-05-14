/**
 * 1. @hash
 *    To get the current URL hash, use the cy.hash() command.
 * 
 * 2. @location
 *    To get window.location, use the cy.location() command.
 * 
 * 3. @url
 *    To get the current URL, use the cy.url() command.
 */

class LocationKsc {

    locationCommand() {
        cy.hash().should('be.empty')

        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('https://example.cypress.io/commands/location')
            expect(location.host).to.eq('example.cypress.io')
            expect(location.hostname).to.eq('example.cypress.io')
            expect(location.origin).to.eq('https://example.cypress.io')
            expect(location.pathname).to.eq('/commands/location')
            expect(location.port).to.eq('')
            expect(location.protocol).to.eq('https:')
            expect(location.search).to.be.empty
        })
        cy.url().should('eq', 'https://example.cypress.io/commands/location')
    }

}