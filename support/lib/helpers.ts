import { expect } from "chai";
import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";
import { async } from "q";

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

/**
 * Scroll to ELement
 *
 * @param {string} selector
 */
async function focusOnElement(selector: string) {
    // Mouse move doing similar job like scrolling
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

/**
 * Waits for the selector to appear
 *
 * @param {string} selector
 */
async function waitForSelector(selector: string) {
    const until = protractor.ExpectedConditions;
    const e = element(by.css(selector));
    const timeout = 5000;

    await browser.wait(
        until.presenceOf(e),
        timeout,
        `${selector} - selector appearance took longer than expected`
    );
}

/**
 * Maximazes the screen
 *
 */
async function maximizeScreen() {
    await browser.manage().window().maximize();
}

// Checks

/**
 * Checks reather check box is selected or not
 *
 * @param {string} selector
 * @param {*} [not]
 * @returns
 */
async function checkIsSelected(selector: string, not?) {
    const isSelected = await element(by.css(selector)).isSelected();
    if (not) { return expect(isSelected).to.equal(false); }
    expect(isSelected).to.equal(true);
}

async function checkIsDisplayed(selector: string, not?) {
    const isDisplayed = await element(by.css(selector)).isDisplayed();
    if (not) { return expect(isDisplayed).to.equal(false); }
    expect(isDisplayed).to.equal(true);
}

/**
 * Checks reather element is enabled or not
 *
 * @param {string} selector
 * @param {*} [not]
 * @returns
 */
async function checkElementEnabled(selector: string, not?) {
    const isEnabled = await element(by.css(selector)).isEnabled();
    if (not) { return expect(isEnabled).to.equal(false); }
    expect(isEnabled).to.equal(true);
}

export {
    click,
    pressEnter,
    openURL,
    type,
    resizeScreen,
    focusOnElement,
    waitForSelector,
    maximizeScreen,
    checkIsSelected,
    checkIsDisplayed,
    checkElementEnabled
};
