import {URL} from "node:url";

export function isValidURL(url){
    try{
        new URL(url);
        return true;
    }catch(err){
        console.error(err);
        return false;
    }
}

export function parseURL(url){

    const parsedURL = new URL(url).pathname

    const productID = parsedURL.split("/").pop();

    return productID;
}