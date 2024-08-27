/** Generated from: features\checkout.feature */
import { test } from "playwright-bdd";

test.describe("Test  sauce demo checkout page", () => {

  test("As a user, I can log into the secure area  and complete a purchase", async ({ Given, page, When, And, Then }) => {
    await Given("I am on the sauce demo login page", null, { page });
    await When("I enters the username and password", null, { page });
    await And("I Click on login button");
    await Then("I navigates to home page");
    await Then("I added products to the cart", null, { page });
    await Then("I proceed to checkout");
    await Then("I enter the all information");
    await And("Click on continue button");
    await Then("Click on finish button");
    await Then("Click backToHome button");
    await And("I Logout from the application");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\checkout.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "As a user, I can log into the secure area  and complete a purchase": {"pickleLocation":"3:3"},
};