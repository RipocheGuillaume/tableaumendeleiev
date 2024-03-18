const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router=require("./app/routers/router.js")

const port = process.env.PORT || 3000;
const url = process.env.BASE_URL || `http://localhost`;

app.set("views","./app/views");
app.set("view engine","ejs");

app.use(router)

app.listen(port, (req, res) => {
  console.log(`listen on ${url}${port}`);
});
