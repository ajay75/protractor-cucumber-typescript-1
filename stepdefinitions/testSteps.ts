import { Given } from "cucumber";
import { Then } from "cucumber";
import {
    checkIsSelected,
    click,
    maximizeScreen,
    moveToElement,
    openURL,
    resizeScreen,
    type
} from "../support/lib/helpers";

Given(/^I should be at "([^"]*)" home page$/, openURL);
Then(/^I type "([^"]*)" to "([^"]*)"$/, type);
Then(/^I resize the screen (\d+) px width by (\d+) px height$/, resizeScreen);
Then(/^I move to element "([^"]*)"$/, moveToElement);
Then(/^I maximize the screen$/, maximizeScreen);
Then(/^I click to "([^"]*)"$/, click);
Then(/^I check "([^"]*)" is( not)? selected$/, checkIsSelected);
