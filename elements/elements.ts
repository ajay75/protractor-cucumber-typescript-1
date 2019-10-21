import { by, element, ElementFinder } from "protractor";

interface ElementOptions {
    [key: string]: ElementFinder;
}

interface UrlOptions {
    [key: string]: string;
}

// Use keys on feature file
const URLs: UrlOptions = {
    "Home Page": "http://localhost:3000",
    "Login Page": ""
};

// Use keys on feature file
const elements: ElementOptions = {
    "Positions Header": element(by.xpath("//header//span[.='Positions']")),
    "Carry Prices Header": element(by.xpath("//header//span[.='Carry Prices']")),
    "Broker Matrix Header": element(by.xpath("//header//span[.='Broker Matrix']")),
};

export function getElement(key: string) {
    return elements[`${key}`];
}

export function getURL(key: string) {
    return URLs[`${key}`];
}
