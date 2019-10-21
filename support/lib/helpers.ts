import { expect } from "chai";
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { getElement, getURL } from "../../elements/elements";

// +++++++++++++ Actions +++++++++++++

/**
 * Clicks to given button
 *
 * @param {string} selector
 */
async function click(selector: string) {
    try {
        await getElement(selector).click();
    } catch (e) {
        throw new Error(`Could NOT CLICK on selector: ${selector}`);
    }
}

/**
 * Types (enters) text or input to given text field
 *
 * @param {string} input
 * @param {string} selector
 */
async function type(input: string, selector: string) {
    try {
        await getElement(selector).clear();
        await getElement(selector).sendKeys(input);
    } catch (error) {
        throw new Error(`Could NOT type TEXT in to selector: ${selector}`);
    }
}

/**
 * Presses Enter button on keyboard
 *
 */
async function pressEnter() {
    await browser
        .actions()
        .sendKeys(protractor.Key.ENTER)
        .perform();
}

/**
 * Navigates to given URL
 *
 * @param {string} URL
 */
async function openURL(URL: string) {
    await browser.get(getURL(URL));
}

/**
 * Resizes the screen
 *
 * @param {number} width
 * @param {number} height
 */
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
    try {
        await browser
            .actions()
            .mouseMove(getElement(selector))
            .perform();
    } catch (error) {
        throw new Error(`Error: failed to scroll to element matching selector "${selector}"`);
    }
}

/**
 * Waits for the selector to appear
 *
 * @param {string} selector
 */
async function waitForSelector(selector: string) {
    const until = protractor.ExpectedConditions;
    const e = getElement(selector);
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

// +++++++++++++ Chceks +++++++++++++

/**
 * Checks reather check box is selected or not
 *
 * @param {string} selector
 * @param {*} [not]
 * @returns
 */
async function checkIsSelected(selector: string, not?) {
    const isSelected = await getElement(selector).isSelected();
    if (not) { return expect(isSelected).to.equal(false); }
    expect(isSelected).to.equal(true);
}

/**
 * Checks reather element is displayed or not
 *
 * @param {string} selector
 * @param {*} [not]
 * @returns
 */
async function checkIsDisplayed(selector: string, not?) {
    const isDisplayed = await getElement(selector).isDisplayed();
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
    const isEnabled = await getElement(selector).isEnabled();
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
