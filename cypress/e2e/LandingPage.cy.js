describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should show the user a Landing Page", () => {
    cy.get(".landing-page-container")
      .get(".face-and-bubble-container")
      .get(".wilson")
      .get(".bubble")
      .contains(
        "Wooow! Thanks for stopping by! What do you say we check out some movies?!"
      )
      .get(".container-for-button")
      .get(".go-to-movies-button")
      .contains("Show Me The Wilson");
  });
});
