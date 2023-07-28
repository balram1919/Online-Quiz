const { quizDetails, question } = require("./quiz.model");
const getQuizDetailers = async (req, res, next) => {
  try {
    const response = await quizDetails
      .find()
      .populate({
        path: "teacherId",
        populate: { path: "gender" },
        populate: { path: "subject" },
      })
      .populate("subject");
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createQuizDetailers = async (req, res, next) => {
  try {
    const teacherId = req.params.teacherId;
    const response = new quizDetails({ ...req.body, teacherId });
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateQuizDetailers = async (req, res, next) => {
  try {
    const id = req.params.quizId;
    const updateQuizDetailers = await quizDetails.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.send(updateQuizDetailers);
  } catch (error) {
    next(error);
  }
};
const deleteQuizDetailer = async (req, res, next) => {
  try {
    const id = req.params.quizId;
    const deleteQuizDetailer = await quizDetails.deleteOne({ _id: id });
    res.send(deleteQuizDetailer);
  } catch (error) {
    next(error);
  }
};
const setActiveQuiz = async (req, res, next) => {
  try {
    const id = req.params.quizId;
    const response = await quizDetails.updateOne(
      { _id: id },
      { $set: { isActive: true } }
    );
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const setInActiveQuiz = async (req, res, next) => {
  try {
    const id = req.params.quizId;
    const response = await quizDetails.updateOne(
      { _id: id },
      { $set: { isActive: false } }
    );
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createQuestion = async (req, res, next) => {
  try {
    const quizId = req.params.quizId;
    const response = new question({ ...req.body, quizId });
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateQuestion = async (req, res, next) => {
  try {
    const id = req.params.questionId;
    const updateQuestion = await question.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.send(updateQuestion);
  } catch (error) {
    next(error);
  }
};
const deleteQuestion = async (req, res, next) => {
  try {
    const id = req.params.questionId;
    const deleteQuestion = await question.deleteOne({ _id: id });
    res.send(deleteQuestion);
  } catch (error) {
    next(error);
  }
};
const getQuestion = async (req, res, next) => {
  const quizId = req.params.quizId;
  try {
    const response = await question.find({ quizId }).select("question option");
    res.send(response);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getQuizDetailers,
  createQuizDetailers,
  updateQuizDetailers,
  deleteQuizDetailer,
  setActiveQuiz,
  setInActiveQuiz,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
};
