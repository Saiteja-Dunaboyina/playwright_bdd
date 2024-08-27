/** Generated from: features\bookstoreAPI.feature */
import { test } from "playwright-bdd";

test.describe("API Testing", () => {

  test("API testing using bookstore API", async ({ Given, When, Then }) => {
    await Given("I generate a token");
    await When("I request to retrieve all existing booking IDs from the API");
    await Then("I should be able to create a new booking using POST method");
    await Then("I can able to Update a current booking");
    await Then("I am able to Update a current booking with a partial payload");
    await Then("I can delete a particular user");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\bookstoreAPI.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "API testing using bookstore API": {"pickleLocation":"3:3"},
};