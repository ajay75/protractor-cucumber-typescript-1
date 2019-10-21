import { by, element } from "protractor";
import { ElementOptions, UrlOptions } from "./elements-utils";

// Use keys on feature file
const elements: ElementOptions = {
    // Metals client header elements
    "Positions Header": element(by.xpath("//header//span[.='Positions']")),
    "Carry Prices Header": element(by.xpath("//header//span[.='Carry Prices']")),
    "Broker Matrix Header": element(by.xpath("//header//span[.='Broker Matrix']")),
};

// Use keys on feature file
const URLs: UrlOptions = {
    "Home Page": "http://localhost:3000",
    "Login Page": ""
};

export {
    URLs,
    elements
};
