import {Router} from "express"
import { isValidURL } from "../utils/middleware.js";
import { productRouter } from "../controller/productController.js";


export const router = Router();

router.use("/product",isValidURL,productRouter);