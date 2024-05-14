/**
 * @Traversal 
 *  1. @children
 *      - To get children of DOM elements,
 *  2. @closest
 *      - To get the closest ancestor DOM element
 *  3. @eq
 *      - To get a DOM element at a specific index
 *  4. @filter
 *      - To get DOM elements that match a specific selector
 *  5. @find
 *      - To get descendant DOM elements of the selector,
 *  6. @first
 *      - To get the first DOM element within elements
 *  7. @last
 *      - To get the last DOM element within elements
 *  8. @next
 *      - To get the next sibling DOM element within elements
 *  9. @nextAll
 *      - To get all of the next sibling DOM elements within elements
 *  10. @nextUntil
 *      - To get all of the next sibling DOM elements within elements until another element
 */

export class TraversalKsc {

    childrenCommand() {
        cy.get('.traversal-breadcrumb')
            .children('.active').should('contain', 'Data');
    }

    closestCommand() {
        cy.get('.traversal-badge')
            .closest('ul').should('have.class', 'list-group')
    }

    eqCommand() {

        cy.get('.traversal-list>li')
            .eq(1).should('contain', 'siamese')

    }

    filterCommand() {
        cy.get('.traversal-nav>li').filter('.active').should('contain', 'About')
    }

    findCommand() {
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
    }

    firstCommand() {
        cy.get('.traversal-buttons .btn')
            .first().should('contain', 'Link')
    }

    lastCommand() {
        cy.get('.traversal-buttons .btn')
            .last().should('contain', 'Submit')
    }
    
    nextCommand() {
        cy.get('.traversal-ul')
            .contains('apples').next().should('contain', 'oranges')
    }

    nextAllCommand() {
        cy.get('.traversal-next-all')
            .contains('oranges')
            .nextAll().should('have.length', 3)
    }

    nextUntilCommand() {
        cy.get('#veggies')
            .nextUntil('#nuts').should('have.length', 3)
    }
}