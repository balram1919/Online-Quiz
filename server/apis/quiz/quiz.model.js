const mongoose = require("mongoose");

const quizDetailedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subject",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
const questionSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizdetailed",
  },
  question: {
    type: String,
    required: true,
  },
  option: { A: String, B: String, C: String, D: String },
  currentAnswer: {
    type: String,
  },
});
const question = mongoose.model("question", questionSchema);
const quizDetails = mongoose.model("quizdetailed", quizDetailedSchema);

module.exports = { quizDetails, question };
