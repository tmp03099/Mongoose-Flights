const mongoose = require("mongoose");

//Global configuration to connect mongodb
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function () {
  //connect to MongoDB
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // listen for diff situation on connection
  db.on("error", (error) => console.error(error));
  db.on("open", () => console.log("Connected to MongoDB"));
  db.on("close", () => console.log("Disconnected to MongoDB"));
};
