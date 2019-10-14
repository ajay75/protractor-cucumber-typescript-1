import { expect } from "chai";
import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";

// Actions

async function click(selector: string) {
    try {
        await element(by.css(selector)).click();
    } catch (e) {
        throw new Error(`Could NOT CLICK on selector: ${selector}`);
    }
}

async function type(input: string, selector: string) {
    try {
        await element(by.css(selector)).clear();
        await element(by.css(selector)).sendKeys(input);
    } catch (error) {
        throw new Error(`Could NOT type TEXT in to selector: ${selector}`);
    }
}

async function pressEnter(key: string) {
    await browser
        .actions()
        .sendKeys(protractor.Key.ENTER)
        .perform();
}

async function openURL(URL: string) {
    await browser.get(URL);
}

async function resizeScreen(width: number, height: number) {
    try {
        await browser
            .driver
            .manage()
            .window()
            .setSize(width, height);
    } catch (error) {
        throw new Error(
            `Error: width "${width}" or height "${height}" is invalid`
        );
    }
}

async function moveToElement(selector: string) {
    try {
        await browser
            .actions()
            .mouseMove(element(by.css(selector)))
            .perform();
    } catch (error) {
        throw new Error(
            `Error: failed to scroll to element matching selector "${selector}"`
        );
    }
}

async function waitForSelector(selector: string) {
    const until = protractor.ExpectedConditions;
    const e = element(by.css(selector));
    const timeout = 5000;
    await browser.wait(
        until.presenceOf(e),
        timeout,
        `${selector} - selector took to long to appear`
    );
}

async function maximizeScreen() {
    await browser.manage().window().maximize();
}

// Checks

async function checkIsSelected(selector: string, not?) {
    const isSelected = await element(by.css(selector)).isSelected();
    if (not) { return expect(isSelected).to.equal(false); }
    expect(isSelected).to.equal(true);
}

export {
    click,
    pressEnter,
    openURL,
    type,
    resizeScreen,
    moveToElement,
    waitForSelector,
    maximizeScreen,
    checkIsSelected
};
