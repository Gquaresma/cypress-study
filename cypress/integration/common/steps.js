Given(/^que está na home$/, () => {
  cy.visit("/");
  cy.url().should("contains", "/home");
});
