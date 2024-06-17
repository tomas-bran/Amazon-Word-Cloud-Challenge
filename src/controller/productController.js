import { Router } from "express";
import { ProductService } from "../service/productService.js";
import { isValidURL } from "../utils/middleware.js";


export const productRouter = Router();

const service = new ProductService();

productRouter.post("/", isValidURL, async (req, res) => {
    await service.getDescriptionByID(req.query.productUrl);
    return res.status(200).send("OK");
})

productRouter.get("/", (req, res) => {
    const topWords = service.getNTopWords(req.query.TopWords, res);
    return res.json(topWords).status(200);
})


