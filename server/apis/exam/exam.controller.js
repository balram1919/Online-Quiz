const { question } = require("../quiz/quiz.model");
const Exam = require("./exam.model");
const getExam = async (req, res, next) => {
  const quizId = req.params.quizId;
  try {
    const response = await question.find({ quizId }).select("question option");
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const submitExam = async (req, res, next) => {
  try {
    const quizId = req.params.quizId;
    const studentId = req.params.studentId;
    const total = req.body.answers.length;
    let score = 0;
    const questions = await question.find({ quizId }).select("currentAnswer");
    JSON.parse(JSON.stringify(questions)) &&
      JSON.parse(JSON.stringify(questions)).map((item) => {
        const find = req.body.answers.find((val) => {
          return val?.questionId === item?._id;
        });
        if (find?.answers === item.currentAnswer) {
          score = score + 1;
        }
      });
    const response = new Exam({ ...req.body, quizId, studentId, total, score });
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getExam, submitExam };
