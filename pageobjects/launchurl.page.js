exports.LaunchUrl  = class LaunchUrl {
    constructor(page) {
        this.page = page;
    }

    async launchUrl(url) {
        await this.page.goto(url);
    }
}

