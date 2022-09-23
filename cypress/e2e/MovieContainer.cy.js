describe("MovieContainer", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100",
      {
        fixture: "/random?results=100.json",
      }
    )
      .as("sampleMovieData")
      .visit("http://localhost:3000")
      .wait("@sampleMovieData")
      .its("response.body")
      // .get(".nav-container")
      .should("have.length", 5);
  });

  it('Should take the user to the MovieContainer page after clicking the "Show Me The Wilson" button on the LandingPage', () => {
    cy.get(".landing-page-container")
      .get(".face-and-bubble-container")
      .get(".wilson")
      .should("have.attr", "src")
      .get(".bubble")
      .should("exist")
      .contains(
        "Wooow! Thanks for stopping by! What do you say we check out some movies?!"
      )
      .get(".container-for-button")
      .should("have.length", 1)
      .get(".go-to-movies-button")
      .click()
      .url()
      .should("include", "movies");
  });

  it("Should display the Nav, MovieContainer, and Footer", () => {
    cy.get(".nav-container")
      .should("exist")
      .get(".wilson-face-and-bubble-container")
      .should("exist")
      .get(".wilson-face")
      .should("exist")
      .should("have.attr", "src")
      .get('.wow-bubble')
      .should('exist')
      .should('contain', 'Wooooooow!')
      // .get('form')
      // .get('.button-container')
  });
});
