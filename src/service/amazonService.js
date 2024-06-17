import axios from "axios";
import { parseURL } from "../utils/url.js";
import { isIDinCache } from "../utils/cache.js";



export const fetchDescription = async (productID)=>{

    let description = "";

    try{
    const scraperURL = `https://api.scraperapi.com/structured/amazon/product?api_key=${process.env.SCRAPER_APIKEY}&asin=${productID}`

    const document = await axios.get(scraperURL);

    description = document.data.full_description;

    if(description == undefined)
        description = "";
    }
    catch(err){
        console.error(err);
    }
    

    return description;
}