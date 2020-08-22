describe("Homepage", () => {
  it("matches the screenshot", () => {
    cy.visit("/?no-slideshow")
    // Wait until the image loads, otherwise we compare the low-res version to the captured full-res snapshot
    cy.get('[data-cy="homepage-slideshow-image"]').should("have.attr", "data-loaded", "true")
    cy.matchImageSnapshot()
  })
})
