import { ElementFinder } from "protractor";
import { elements, URLs } from "./elements";

interface ElementOptions {
    [key: string]: ElementFinder;
}

interface UrlOptions {
    [key: string]: string;
}

function getElement(key: string) {
    return elements[`${key}`];
}

function getURL(key: string) {
    return URLs[`${key}`];
}

export {
    ElementOptions,
    UrlOptions,
    getElement,
    getURL,
};
