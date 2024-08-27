import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
require("dotenv").config();
const { expect } = require("chai");
const indexPage = require("../pageobjects/index.page")

let lauchUrlPage,loginPage
Given('I am on the sauce demo login page',async ({ page }) => {
	lauchUrlPage  = new indexPage.LaunchUrl(page);
    await lauchUrlPage.launchUrl(process.env.baseUrl);
});

When('I enters the username and password',async ({ page }) => {
	loginPage  = new indexPage.LoginPage(page);
    await loginPage.enterLoginInputText(process.env.user,process.env.password);
});

When('I Click on login button',async () => {
	await loginPage.clickOnLoginButton();
});

Then('I navigates to home page',async () => {
    expect(await loginPage.appLogo().isVisible()).to.be.true;
});

Then('I Logout from the application',async () => {
	await loginPage.logout();
});
