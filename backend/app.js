const express = require("express");
const app = express();


app.use(express.json)


const product= require("./routes/productRoute");
const error = require("./middleware/error");

app.use("/api/v1",product)


app.use(error)


module.exports=app;
