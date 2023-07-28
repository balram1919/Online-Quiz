const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gender",
  },
  age: {
    type: Number,
    default: 0,
  },
  subject: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
    },
  ],
  role: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
