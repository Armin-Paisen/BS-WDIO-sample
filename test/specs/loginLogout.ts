import LoginPage from "../pageobjects/login.page";
import data from "../data";

describe("Log into customer account", () => {
  it("should login with no credentials and check error", async () => {
    await LoginPage.navigateLogin();
    await LoginPage.login("", "");
    await expect(LoginPage.errorUsername).toBeDisplayed();
    await expect(LoginPage.errorUsername).toHaveText(
      "Please enter a valid email address",
    );
    await expect(LoginPage.errorPassword).toBeDisplayed();
    await expect(LoginPage.errorPassword).toHaveText(
      "Please enter at least 8 characters",
    );
  });

  it("should login with wrong credentials and check error", async () => {
    await LoginPage.login(data.wrongUser.email, data.wrongUser.password);
    await expect(LoginPage.errorUsername).toBeDisplayed();
    await expect(LoginPage.errorUsername).toHaveText(
      "Please enter a valid email address",
    );
    await expect(LoginPage.errorPassword).toBeDisplayed();
    await expect(LoginPage.errorPassword).toHaveText(
      "Please enter at least 8 characters",
    );
  });

  it("should login with wrong email and check error password error dissapears", async () => {
    await LoginPage.login(
      data.wrongEmailUser.email,
      data.wrongEmailUser.password,
    );
    await expect(LoginPage.errorUsername).toBeDisplayed();
    await expect(LoginPage.errorUsername).toHaveText(
      "Please enter a valid email address",
    );
    await LoginPage.errorPassword.waitForDisplayed({
      reverse: true,
      timeout: 2000,
    });
    await expect(LoginPage.errorPassword).not.toBeDisplayed();
  });

  it("should login with valid credentials", async () => {
    // This sample app's login doesnt really work it just shows an example "you are logged in" message"
    await LoginPage.login(data.validUser.email, data.validUser.password);
    await expect(LoginPage.btnLoginAlert).toBeDisplayed();
    await LoginPage.btnLoginAlert.click();
    await expect(LoginPage.btnLoginAlert).not.toBeDisplayed();
    await expect(LoginPage.btnSubmit).toBeDisplayed();
  });
});
