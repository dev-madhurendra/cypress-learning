import fixture from '../fixtures/example.json'

describe('E2E tests to create private repo on github', () => { 

    it('should create repository', () => {
        let { repoName, gitIgnoreFileLng, username, password } = fixture;

        cy.visit("https://github.com/login")

        
        cy.get('#login_field').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.get("input[type='submit']").should('be.enabled').click()

        cy.get('#global-create-menu-anchor').click()
        
        cy.get('[id=":r5:"]').click();

        // cy.get('#login_field').should('be.visible').type(username);
        // cy.get('#password').should('be.visible').type(password);
        // cy.get("input[type='submit']").should('be.enabled').click()
        
        cy.get("input[data-testid='repository-name-input']")
            .should('be.visible').type(repoName)
        
        cy.get("input[type='checkbox']").eq(1).should('be.enabled').check()

        // for creating private repo
        cy.get("input[value='private']").click()

        cy.get("button[aria-describedby='license-picker-label']").eq(0)
            .should('be.enabled').click()
        
        cy.get("input[aria-label='Template filter']").should('be.visible')
            .type(gitIgnoreFileLng)

        cy.get("div[data-is-active-descendant='activated-indirectly']")
            .should('contain.text', 'Java').click();
        
        cy.get("button[type='submit']").eq(2)
            .should('contain.text', 'Create repository')
            .click()
    });
})