/** Generated from: features\login.feature */
import { test } from "playwright-bdd";

test.describe("Test sauce demo login page", () => {

  test("Login with valid credentials", async ({ Given, page, When, And, Then }) => {
    await Given("I am on the sauce demo login page", null, { page });
    await When("I enters the username and password", null, { page });
    await And("I Click on login button");
    await Then("I navigates to home page");
    await And("I Logout from the application");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Login with valid credentials": {"pickleLocation":"3:3"},
};