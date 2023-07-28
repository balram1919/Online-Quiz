const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  label: {
    type: String,
  },
  value: {
    type: String,
  },
});

const Subject = mongoose.model("subject", SubjectSchema);

module.exports = Subject;
