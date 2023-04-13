const mongoose = require("mongoose");

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
    default: "04/13/2024 04:00 PM",
  },
});

// * create the model
const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
