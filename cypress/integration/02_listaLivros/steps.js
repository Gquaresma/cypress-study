Then(/^os livros estão visiveis$/, () => {
  cy.get('div[class="content section"]').should("be.visible");
  cy.get(".item-container").should("be.visible");
});

Then(/^os livros mock estão visiveis$/, () => {
  cy.intercept(
    "GET", // Route all GET requests
    "**/livro", // that have a URL that matches '/users/*'
    { fixture: "livrosMock.json" } // and force the response to be: []
  ).as("getBooks");

  cy.wait("@getBooks", { timeout: 5000 });

  cy.get(".item-container").should("be.visible");
});
