describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should show the user a Landing Page", () => {
    cy.get(".landing-page-container")
      .get(".face-and-bubble-container")
      .get(".wilson")
      .should('have.attr', 'src')
      .get(".bubble")
      .should('exist')
      .contains(
        "Wooow! Thanks for stopping by! What do you say we check out some movies?!"
      )
      .get(".container-for-button")
      .should('have.length', 1)
      .get(".go-to-movies-button")
      .should('exist')
      .contains("Show Me The Wilson")
      .get('.footer')
      .get('.personContainer')
      .get('p')
      .contains('Jordan Farelli')
      .get('.linkedinAnchor')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/jordan-farelli/')
      .get('.githubAnchor')
      .should('have.attr', 'href', 'https://github.com/jfarelli')
  });

  it('Should take the user to the MovieContainer page when the "Show Me The Wilson" is clicked', () => {
    cy.get(".landing-page-container")
      .get(".face-and-bubble-container")
      .get(".wilson")
      .should('have.attr', 'src')
      .get(".bubble")
      .should('exist')
      .contains(
        "Wooow! Thanks for stopping by! What do you say we check out some movies?!"
      )
      .get(".container-for-button")
      .should('have.length', 1)
      .get(".go-to-movies-button")
      .click()
      .url()
      .should('eq', 'http://localhost:3000/movies')
  });
});
