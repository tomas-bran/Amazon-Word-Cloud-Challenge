import express from "express"
import { productController } from "./src/api/productController.js";
import 'dotenv/config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));


const port = process.env.PORT ?? 8080

app.get("/",(req,res)=>{
    res.send("Hola").status(200);
})

app.post("/", async (req,res)=>{
    await productController(req.query.productUrl,res);
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})