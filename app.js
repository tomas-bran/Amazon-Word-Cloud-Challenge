import express from "express"
import 'dotenv/config.js';
import { router } from "./src/router/router.js";
import { ErrorHandler } from "./src/utils/exceptions.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));



const port = process.env.PORT ?? 8080

/*app.get("/",(req,res)=>{
    topWordsController(req.query.TopWords,res);
})*/

/*app.post("/", async (req,res)=>{
    await productController(req.query.productUrl,res);
})*/

app.use("/api",router);

app.use(ErrorHandler);

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})