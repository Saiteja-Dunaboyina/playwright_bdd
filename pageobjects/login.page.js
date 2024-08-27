const utilConst = require("../utils/const")

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
    }

    inputfiled(text) {
        return this.page.locator(`//input[@id='${text}']`);
    }

    appLogo() {
        return this.page.locator("//div[@class='app_logo']");
    }

    menuButton() {
        return this.page.locator("//button[@id='react-burger-menu-btn']");
    }

    logoutButton() {
        return this.page.locator("//a[@id='logout_sidebar_link']");
    }

    async enterLoginInputText(username,password) {
        await this.inputfiled(utilConst.Const.Username).fill(username);
        await this.inputfiled(utilConst.Const.Password).fill(password);
    }

    async clickOnLoginButton() {
        await this.inputfiled(utilConst.Const.login).click();
    }
    async logout() {
        await this.menuButton().click();
        await this.logoutButton().click();
    }

}