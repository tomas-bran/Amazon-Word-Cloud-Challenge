import express from "express";
import "dotenv/config.js";
import { router } from "./router/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? 8080;

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
