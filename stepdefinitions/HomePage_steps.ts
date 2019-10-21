import { Given, Then } from "cucumber";
import { checkIsPresent, openURL } from "../support/lib/helpers";

Given(/^I should be at "([^"]*)"$/, openURL);
Then(/^I expect the element "([^"]*)" is( not)? present$/, checkIsPresent);
