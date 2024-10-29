describe("main app", () => {
  it("should use the mocks serverside", () => {
    cy.visit("/");
    // ensure an element with '1 - Darius' is present
    cy.contains("1 - Darius").should("exist");
  });

  it("should use the mocks clientside", () => {
    cy.visit("/");
    // ensure an element with 'BIGBUCKS' is present
    cy.contains("BIGBUCKS").should("exist");
  });
});
