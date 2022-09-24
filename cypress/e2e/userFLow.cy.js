describe("User Flow", () => {
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
      .should("have.length", 5)

      .get(".landing-page-container")
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
      .should("eq", "http://localhost:3000/movies");
  });

  it("Should show the Nav bar when lead to the /movies url", () => {
    cy.get(".nav-container")
      .get(".wilson-face-and-bubble-container")
      .should("exist")
      .get(".wilson-face")
      .should("exist")
      .should("have.attr", "src")
      .get(".wow-bubble")
      .should("exist")
      .should("contain", "Wooooooow!")
      .get("form")
      .get(".button-container")
      .children()
      .should("have.length", 2)
      .should("exist")
      .get("button")
      .should("have.length", 2)
      .get(".home-button")
      .eq(0)
      .should("exist")
      .contains("Home")
      .get(".random-button")
      .last()
      .should("exist")
      .contains("Random")
      .get(".dropdown-container")
      .children()
      .should("have.length", 1)
      .get(".wow-count-dropdown")
      .should("exist")
      .get("option")
      .should("have.length", 8);
  });

  it("Should show the MovieContainer when lead to the /movies url", () => {
    cy.get(".movie-card-collection")
      .should("exist")
      .get(".single-movie-container")
      .should("exist")
      .should("have.length", 5)
      .get("img")
      .should("exist");
  });

  it("Should show the Footer when lead to the /movies url", () => {
    cy.get(".footer")
      .get(".personContainer")
      .get("p")
      .contains("Jordan Farelli")
      .get(".linkedinAnchor")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/jordan-farelli/"
      )
      .get(".githubAnchor")
      .should("have.attr", "href", "https://github.com/jfarelli");
  });

  it("Should take the user back to the landing page when the Home button is clicked", () => {
    cy.get(".nav-container")
      .get("form")
      .get(".home-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });

  it("Should display a random movie on the /details page when the Random button is clicked", () => {
    cy.get(".nav-container")
      .get("form")
      .get(".random-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/details")
      .get(".movie-details-container")
      .get("iframe")
      .should("exist")
      .get(".movie-details")
      .children()
      .should("have.length", 4)
      .get("p")
      .eq(0)
      .should("contain", "Character:")
      .get("p")
      .eq(1)
      .should("contain", "Line:")
      .get("p")
      .eq(2)
      .should("contain", "'Wow' Count at Clip:")
      .get("p")
      .eq(3)
      .should("contain", "Total 'Wow' Count in Movie:");
  });

  it('Should filter movies by total "Wow" Count', () => {
    cy.get(".nav-container")
      .get("form")
      .get(".wow-count-dropdown")
      .select(5)
      .get(".single-movie-container")
      .should("have.length", 2);
  });

  it("Should be able to click a movie's poster image and be directed to the /details page", () => {
    cy.get(".single-movie-container")
      .eq(1)
      .click()
      .url()
      .should("eq", "http://localhost:3000/details")
      .get(".movie-details-container")
      .get("img")
      .should("exist")
      .get(".trailer-and-details-container")
      .get(".movie-details")
      .children()
      .should("have.length", 4)
      .get("p")
      .eq(0)
      .should("contain", "Character: Jack Dwyer")
      .get("p")
      .eq(1)
      .should("contain", 'Line: "Wow."')
      .get("p")
      .eq(2)
      .should("contain", "'Wow' Count at Clip: 1")
      .get("p")
      .eq(3)
      .should("contain", "Total 'Wow' Count in Movie: 2");
  });

  it("Should be able to select another movie from the dropdown and be shown that movie's details", () => {
    cy.get(".single-movie-container")
      .eq(2)
      .click()
      .url()
      .should("eq", "http://localhost:3000/details")
      .get('.movie-title-dropdown')
      // .select("The Internship")
  });

  it("should redirect the user to an error page when the page fails to load", () => {
    cy.visit("http://localhost:3000/blah")
      .get(".error-page-container").should('exist')
      .get('.error-face-and-bubble-container')
      .contains("Wooow! Something went wrong!")
      .get(".error-go-to-movies-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/movies");
  });
});
