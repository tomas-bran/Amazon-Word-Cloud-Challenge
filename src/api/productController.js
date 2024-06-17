import { fetchDescription } from "../services/amazonService.js";
import { processDescription } from "../services/wordCloudService.js";
import { isIDinCache } from "../utils/cache.js";
import { isValidURL, parseURL } from "../utils/url.js"


export const productController = async(url,res) => {

    if(!isValidURL(url))
        return res.status(400).json({error: 'Invalid URL'});
    
    const productID = parseURL(url);
    
    if(!isIDinCache(productID))
    {  
        const description = await fetchDescription(productID);

        if(description.length > 0){
            processDescription(description);

        }
    }
    res.send("OK").status(200);
    
}