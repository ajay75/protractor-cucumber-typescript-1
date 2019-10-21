import { Given, Then } from "cucumber";
import { click, openURL } from "../support/lib/helpers";

Given(/^I should be at "([^"]*)"$/, openURL);
Then(/^I click on "([^"]*)"$/, click);
