import {URL} from "node:url";


export function parseURL(url){

    const parsedURL = new URL(url).pathname

    const productID = parsedURL.split("/").pop();

    return productID;
}