import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
require("dotenv").config();
const { expect } = require("chai");
const indexPage = require("../pageobjects/index.page")
const data = require('../data/saucedemodata.json')

let checkoutPage
Then('I added products to the cart', async ({ page }) => {
    checkoutPage = await new indexPage.CheckoutPage(page);
    await checkoutPage.addingProductsToCart();
});
  
 
Then('I proceed to checkout', async ({}) => {
    expect(await checkoutPage.cartButton.isVisible()).to.be.true;
    await checkoutPage.clickCartButton();
    await checkoutPage.clickCheckoutButton();
});
  
Then('I enter the all information', async ({}) => {
   await checkoutPage.enterTextToInputFileds(data.firstname,data.lastname,data.pincode);
});
  
Then('Click on continue button', async ({}) => {
   await checkoutPage.clickContinueButton();
});
  
Then('Click on finish button', async ({}) => {
    await checkoutPage.clickFinishButton();
});
  
Then('Click backToHome button', async ({}) => {
    await checkoutPage.clickBackHomeButton();
});