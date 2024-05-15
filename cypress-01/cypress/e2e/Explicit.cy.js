describe('E2E testing for Explicit Assertions', () => { 
    beforeEach(() => {
        cy.visit("https://dev-madhurendra.vercel.app/")
    })   
    it('should text render', () => {
        
        cy.get('.name').then((actualName) => {
            let exppected = "<MADHURENDRA/>"
            let actual = actualName.text();

            // BDD style
            expect(exppected).to.be.equal(actual);

            // TDD style
            assert.equal(actual, exppected);
        })
    });
})