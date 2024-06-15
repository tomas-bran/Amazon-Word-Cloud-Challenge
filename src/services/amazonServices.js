import axios from "axios";
import { parseURL } from "../utils/url.js";
import {createRequire} from "node:module";
const require = createRequire(import.meta.url);
const movies = require("../../db.json");


export const fetchDescription = async (url)=>{

    const productId = parseURL(url);

    //buscar en map si esta el ID, de estar no busca y procede a agregar la mult de cant de palabras
    //de no estar realiza la HTTP request y guarda en map

    const scraperURL = `https://api.scraperapi.com/structured/amazon/product?api_key=${process.env.SCRAPER_APIKEY}&asin=${productId}`

    const document = await axios.get(scraperURL);

    const description = document.data.full_description;



    return description;
}