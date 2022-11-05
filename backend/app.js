import express, { json } from "express";
const app = express();
import bodyParser from 'body-parser'

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
import product from "./routes/productRoute.js";
import error from "./middleware/error.js";
app.use("/api/v1",product)
app.use(error)


export default app;
