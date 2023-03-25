describe("Navigation", () => {
  it("From home to cart and back to home", () => {
    cy.visit("/");

    // Check homepage title
    cy.get("h1").contains("Marvel Comics Store");

    // Click the anchor element, and navigate to cart
    cy.get("svg[name=cart]").click();

    // Verify in the current page is /cart
    cy.url().should("contains", "/cart");

    // Check the cart page title
    cy.get("h1").contains("Shopping Cart");

    // Click the marvel anchor element, and navigate to homepage
    cy.get("img#logo-image").click();

    // Verify in the current page is /
    cy.url().should("contains", "/");

    // Check homepage title
    cy.get("h1").contains("Marvel Comics Store");
  });

  it("From home to detail comic", () => {
    cy.visit("/");

    // Click the anchor element, and navigate to detail page that comic
    cy.get("h3#comic-title:first").click();

    // Verify in the current page is /comic/102616
    cy.url().should("contains", "/comic/102616");

    // Check the comic detail title
    cy.get("h2").contains("Clobberin' Time (2023) #1 (Variant)");
  });
});
