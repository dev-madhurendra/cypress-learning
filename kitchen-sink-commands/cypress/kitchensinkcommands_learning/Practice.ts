/**
 * Create a new repository on github
 * Provide a repo name and click on the create
 */
import fixture from '../fixtures/example.json'

export class AutomateGithub {

    visitUrl() {
        cy.visit("https://github.com/login")
    }

    typeCredentials() {
        let {username, password} = fixture;

        cy.get('#login_field').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.get("input[type='submit']").should('be.enabled').click()
    }

    selectNewRepository() {
        let {repoName, gitIgnoreFileLng} = fixture;

        cy.get('#global-create-menu-anchor').click()
        
        cy.get('[id=":r5:"]').click();

        this.typeCredentials()
        
        cy.get("input[data-testid='repository-name-input']")
            .should('be.visible').type(repoName)
        
        cy.get("input[type='checkbox']").eq(1).should('be.enabled').check()

        cy.get("button[aria-describedby='license-picker-label']").eq(0)
            .should('be.enabled').click()
        
        cy.get("input[aria-label='Template filter']").should('be.visible')
            .type(gitIgnoreFileLng)

        cy.get("div[data-is-active-descendant='activated-indirectly']")
            .should('contain.text', 'Java').click();
        
        cy.get("button[type='submit']").eq(2)
            .should('contain.text', 'Create repository')
            .click()
        
    }

}