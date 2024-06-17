import { fetchDescription } from "../service/amazonService.js";
import { processDescription } from "../service/wordCloudService.js";
import { isIDinCache } from "../utils/cache.js";
import { isValidURL, parseURL } from "../utils/url.js"

export class ProductService {

    productController = async (url,res) => {

        //hacerlo el productService.js
    
        if(!isValidURL(url))
            return res.status(400).json({error: 'Invalid URL'});
    
        //en service throwear el error
        
        const productID = parseURL(url);
        
        
        if(!isIDinCache(productID))
        {  
            const description = await fetchDescription(productID);
    
            if(description.length > 0)
                processDescription(description);
    
            
        }
    
        //si no proceso el ID porque esta en cache, que devuelva un 403
        res.send("OK").status(200);
        
    }





}