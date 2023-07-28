const mongoose = require("mongoose");

const GenderSchema = new mongoose.Schema({
  label: {
    type: String,
  },
  value: {
    type: String,
  },
});

const Gender = mongoose.model("gender", GenderSchema);

module.exports = Gender;
