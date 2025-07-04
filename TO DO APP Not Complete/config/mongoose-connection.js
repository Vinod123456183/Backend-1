const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    res.status(404).json({ message: "Error " });
  });

const db = mongoose.connection;

db.on("error", (error) => {
  debuglog("Error Connecting DB");
});

db.on("open", () => {
  debuglog("Connected To DB");
});

module.exports = db;
