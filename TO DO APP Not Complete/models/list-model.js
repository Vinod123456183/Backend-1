const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "user" }, // Fixed here
  },
  { timestamps: true }
);

module.exports = mongoose.model("listModel", listSchema);
