import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://localhost:3000",

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless", // disable this headless for browser to appear
                "--disable-gpu",
                "--window-size=800,600"
            ]
        }
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../dist/stepdefinitions/*.js", "../../dist/support/*.js"],
        strict: true,
        // tags: "@CucumberScenario or @ProtractorScenario"
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
