// modules require
require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");

//create app
const app = express();
const port = 3000;

//default route
app.get("/", (req, res) => {
  res.send("<h1>Flight Inforamtion</h1>");
});

//app listening
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  connectToDB();
});
