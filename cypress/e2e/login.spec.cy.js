import LoginPage from "../support/pages/LoginPages";

describe("Automation Testing Fitur Login - OrangeHRM (dengan POM)", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
    cy.url().should("include", "/auth/login");
    cy.get("body").should("be.visible");
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Menampilkan elemen halaman login dengan benar", () => {
    loginPage.validateLoginTitle();
    loginPage.validateLogo();
    loginPage.usernameInput().should("have.attr", "placeholder", "Username");
    loginPage.passwordInput().should("have.attr", "placeholder", "Password");
    loginPage.loginButton().should("contain.text", "Login");
  });

  it("Berhasil login dengan kredensial valid", () => {
    cy.intercept("POST", "/web/index.php/auth/validate").as("loginRequest");

    loginPage.usernameInput().type("Admin");
    loginPage.passwordInput().type("admin123");
    loginPage.loginButton().click();

    cy.wait("@loginRequest").then((interception) => {
      expect([200, 302]).to.include(interception.response.statusCode);
    });

    cy.url().should("include", "/dashboard");
  });

  it("Gagal login dengan kredensial tidak valid", () => {
    cy.intercept("POST", "/web/index.php/auth/validate").as("loginRequest");

    loginPage.usernameInput().type("Admin");
    loginPage.passwordInput().type("salahpassword");
    loginPage.loginButton().click();

    cy.wait("@loginRequest").then((interception) => {
      expect([200, 302]).to.include(interception.response.statusCode);
    });

    loginPage
      .errorMessage()
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  });
});
