/**
 *  1. @type
 *      - To type into a DOM element, use the .type() command.
 *  2. @focus
 *      - To focus on a DOM element, use the .focus() command.
 *  3. @blur
 *      - To blur on a DOM element, use the .blur() command.
 *  4. @clear
 *      - To clear on a DOM element, use the .clear() command.
 *  5. @submit
 *      - To submit a form, use the cy.submit() command.
 *  6. @click
 *      - To click a DOM element, use the .click() command.
 *  7. @dblclick
 *      - To double click a DOM element, use the .dblclick() command.
 *  8. @rightclick
 *      - To right click a DOM element, use the .rightclick() command.
 *  9. @check
 *      - To check a checkbox or radio, use the .check() command.
 *  10. @uncheck
 *      - To uncheck a checkbox or radio, use the .uncheck() command.
 *  11. @select
 *      - To select an option in a select, use the .select() command.
 *  12. @scrollIntoView
 *      - To scroll an element into view, use the .scrollintoview() command.
 *  13. @scrollTo
 *      - To scroll the window or a scrollable element to a specific position, use the cy.scrollTo() command.
 *  14. @trigger
 *      - To trigger an event on a DOM element, use the .trigger() command.
 */

class ActionKsc {
    
    typeCommand() {
        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value', 'fake@email.com')

        // .type() with special character sequences
        cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        cy.get('.action-email').type('{del}{selectall}{backspace}')

        // .type() with key modifiers
        cy.get('.action-email').type('{alt}{option}') //these are equivalent
        cy.get('.action-email').type('{ctrl}{control}') //these are equivalent
        cy.get('.action-email').type('{meta}{command}{cmd}') //these are equivalent
        cy.get('.action-email').type('{shift}')

        // Delay each keypress by 0.1 sec
        cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })
        cy.get('.action-email').should('have.value', 'slow.typing@email.com')

        cy.get('.action-disabled')
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
        .type('disabled error checking', { force: true })
        cy.get('.action-disabled').should('have.value', 'disabled error checking')

    }

    focusCommand() {
        cy.get('.action-focus').focus()
        cy.get('.action-focus').should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    }

    selectCommand() {
                // at first, no option should be selected
        cy.get('.action-select')
        .should('have.value', '--Select a fruit--')

        // Select option(s) with matching text content
        cy.get('.action-select').select('apples')
        // confirm the apples were selected
        // note that each value starts with "fr-" in our HTML
        cy.get('.action-select').should('have.value', 'fr-apples')

        cy.get('.action-select-multiple')
        .select(['apples', 'oranges', 'bananas'])
        cy.get('.action-select-multiple')
        // when getting multiple values, invoke "val" method first
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

        // Select option(s) with matching value
        cy.get('.action-select').select('fr-bananas')
        cy.get('.action-select')
        // can attach an assertion right away to the element
        .should('have.value', 'fr-bananas')

        cy.get('.action-select-multiple')
        .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
        cy.get('.action-select-multiple')
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

        // assert the selected values include oranges
        cy.get('.action-select-multiple')
        .invoke('val').should('include', 'fr-oranges')
    }

}