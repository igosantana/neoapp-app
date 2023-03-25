describe("Cart tests", () => {
  it("Add items to cart and add quantity and remove item from cart", () => {
    cy.visit("/");

    // Click the button element (Add to cart)
    cy.get("button:first").click();

    // Verify the items quantity in cart
    cy.get("span#quantity-items-cart").contains("1");

    // Click the anchor element, and navigate to cart
    cy.get("svg[name=cart]").click();

    // Verify in the current page is /cart
    cy.url().should("contains", "/cart");

    // Click the button element (plus one in cart)
    cy.get("button#add-one-item").click();

    // Verify items quantity in cart
    cy.get("span#quantity-items-cart").contains("2");

    // Click the button element (one less in cart)
    cy.get("button#remove-one-item").click();

    // Verify items quantity in cart
    cy.get("span#quantity-items-cart").contains("1");

    // Click the button element to remove item on cart
    cy.get("button#remove-item-from-cart").click();

    // Verify items quantity in cart
    cy.get("span#quantity-items-cart").contains("0");
  });
});
