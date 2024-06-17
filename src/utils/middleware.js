import { InvalidURLException } from "./exceptions.js";

export function isValidURL(req,res,next){
        try{
            new URL(req.query.productUrl);
            next();
        }catch(err){
            return res.status(400).json({ message: "Invalid URL", code: 400 })
        }
        
    }
  
