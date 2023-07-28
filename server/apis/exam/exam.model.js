const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  answers: [{ questionId: String, answers: String }],
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizdetailed",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  total: {
    type: Number,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
});

const Exam = mongoose.model("exam", ExamSchema);

module.exports = Exam;
