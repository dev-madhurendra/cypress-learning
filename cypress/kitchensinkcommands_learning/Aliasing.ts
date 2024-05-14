class AliasingKsc {
    aliasCommand() {
        // The following DOM command chain is unwieldy.
        // To avoid repeating it, let's use `.as()`!
        cy.get('.as-table')
        .find('tbody>tr').first()
        .find('td').first()
        .find('button').as('firstBtn')

        // To reference the alias we created, we place an
        // @ in front of its name
        cy.get('@firstBtn').click()

        cy.get('@firstBtn')
            .should('have.class', 'btn-success')
            .and('contain', 'Changed')
        
    }
}