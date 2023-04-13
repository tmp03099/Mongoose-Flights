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

//* Find all flights in db
app.get("/flights", (req, res) => {
  Flight.find()
    .then((flights) => {
      console.log(flights);
      res.render("flights/Index", { flights: flights });
      //   res.send(flights);
    })
    .catch((error) => {
      console.log(error);
    });
});

//* Get the form
app.get("/flights/new", (req, res) => {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render("flights/new", { departsDate });
});

//* Sort the date in ascending order
app.get("/flights/sort", (req, res) => {
  Flight.find({})
    .sort({ date: -1 })
    .exec()
    .then((flights) => {
      res.send(flights);
    })
    .catch((error) => {
      console.log(error);
    });
});

//* Create a single Flight
app.post("/flights", (req, res) => {
  Flight.create(req.body)
    .then((flight) => {
      console.log(flight);
      res.redirect("/flights");
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("This runs if the promise is completed or rejected");
    });
});

//app listening
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  connectToDB();
});
