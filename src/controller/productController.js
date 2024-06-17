
import { Router } from "express";
import { ProductService } from "../service/productService.js";


export const productRouter = Router();

const service = new ProductService();

productRouter.post("/", async (req,res)=>{
    await service.productController(req.query.productUrl,res);
})

productRouter.get("/",(req,res)=>{
    topWordsController(req.query.TopWords,res);
})


