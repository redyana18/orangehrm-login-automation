class LoginPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  usernameInput() {
    return cy.get('input[name="username"]');
  }

  passwordInput() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  errorMessage() {
    return cy.get(".oxd-alert-content-text");
  }

  validateLoginTitle() {
    cy.contains("Login").should("be.visible");
  }

  validateLogo() {
    cy.get(".orangehrm-login-branding img").should("be.visible");
  }
}

export default LoginPage;
