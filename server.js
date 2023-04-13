// modules require
require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const Flight = require("./models/Flight");
const flights = require("./models/flights");

//create app
const app = express();
const port = 3000;

// ? Config views
app.set("view engine", "jsx"); //jsx file
//using third parties require instead of our own create
app.engine("jsx", require("jsx-view-engine").createEngine());

//? Middleware
//setting a middleware to run in our app
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
//parses the data fromt the request
app.use(express.urlencoded({ extended: false }));

//Query all documents
app.get("/", (req, res) => {
  res.send("<h1>Flight Inforamtion</h1>");
});

app.get("/flights", (req, res) => {
  Flight.find()
    .then((flights) => {
      console.log(flights);
      res.render("flights/Index", { flights: flights });
    })
    .catch((error) => {
      console.log(error);
    });
});

//app listening
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  connectToDB();
});
