const utilConst = require("../utils/const")

exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    buttonElement(elementId) {
        return this.page.locator(`//button[@id='${elementId}']`);
    }

    get cartButton() {
        return this.page.locator("//a[@class='shopping_cart_link']");
    }

    inputElement(elementId) {
        return this.page.locator(`//input[@id='${elementId}']`);
    }

    async addingProductsToCart() {
        await this.buttonElement(utilConst.Const.backPackButtonId).click();
        await this.buttonElement(utilConst.Const.bikeLightButtonId).click();
        await this.buttonElement(utilConst.Const.tShirtButtonId).click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }
    
    async clickCheckoutButton() {
        await this.buttonElement(utilConst.Const.checkoutButtonId).click();
    }

    async enterTextToInputFileds(firstname,lastname,pincode) {
        await this.inputElement(utilConst.Const.firstNameInputId).fill(firstname);
        await this.inputElement(utilConst.Const.lastNameInputId).fill(lastname);
        await this.inputElement(utilConst.Const.postalCodeInputId).fill(pincode);
    }

    async clickContinueButton() {
        await this.inputElement(utilConst.Const.continueInputId).click();
    }

    async clickFinishButton() {
        await this.buttonElement(utilConst.Const.finishButtonId).click();
    }

    async clickBackHomeButton() {
        await this.buttonElement(utilConst.Const.backHomeButtonId).click();
    }
}