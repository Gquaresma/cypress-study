When(/^for para página de login$/, () => {
  cy.get('a[class="circle bold"]').click({ multiple: true });
  cy.url().should("contains", "/auth/login");
});

When(
  /^digitar o email "([^"]*)" e a senha "([^"]*)" e fazer login$/,
  (email, senha) => {
    cy.get("form").should("be.visible");

    cy.get("#email").type(email);
    cy.get("#password").type(senha);

    cy.get("button").should("not.be.disabled").click();
  }
);

Then(/^devo ir para página de home$/, () => {
  cy.url().should("contains", "/home");
});
