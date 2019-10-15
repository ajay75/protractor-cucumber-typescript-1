import { Given } from "cucumber";
import { Then } from "cucumber";
import {
    checkElementEnabled, checkIsDisplayed,
    checkIsSelected,
    click,
    focusOnElement,
    maximizeScreen,
    openURL,
    resizeScreen,
    type
} from "../support/lib/helpers";

Given(/^I should be at "([^"]*)" home page$/, openURL);
Then(/^I type "([^"]*)" to "([^"]*)"$/, type);
Then(/^I resize the screen (\d+) px width by (\d+) px height$/, resizeScreen);
Then(/^I scroll to element "([^"]*)"$/, focusOnElement);
Then(/^I maximize the screen$/, maximizeScreen);
Then(/^I click to "([^"]*)"$/, click);
Then(/^I check "([^"]*)" is( not)? selected$/, checkIsSelected);
Then(/^I check "([^"]*)" is( not)? enabled$/, checkElementEnabled);
Then(/^I focus on "a\[href='#top']" element$/, focusOnElement);
Then(/^I check element "([^"]*)" is( not)? displayed$/, checkIsDisplayed);
