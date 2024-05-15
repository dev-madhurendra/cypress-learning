describe('MyPortfolio E2E tests', () => { 
  beforeEach(() => {
    cy.visit("https://dev-madhurendra.vercel.app/")
  })
  it('should visit my portfolio', () => {
    cy.title().should('eq', "👋 | Madhurendra's Tech Odyssey")
  });    

  it('should sidebar visible', () => {
    cy.get('div[data-testid="icon-component-home"]').should('be.visible')
  })
})