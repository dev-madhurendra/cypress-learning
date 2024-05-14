class ViewportKsc {
    viewportCommand() {
        cy.get('#navbar').should('be.visible')
        cy.viewport(320, 480)
        cy.viewport('ipad-2')
        cy.wait(1000)
        cy.viewport('macbook-15', 'landscape' /*portrait*/)
    }
}