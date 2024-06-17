import {Router} from "express"
import { productRouter } from "../controller/productController.js";


export const router = Router();

router.use("/product", productRouter);