const mongoose = require("mongoose");

const currentDate = new Date();
const oneYearFromNow = new Date(
  currentDate.getFullYear() + 1,
  currentDate.getMonth(),
  currentDate.getDate()
);

//* create Schema
const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: oneYearFromNow,
  },
});

// * create the model
const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
