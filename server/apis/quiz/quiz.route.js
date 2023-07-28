const router = require("express").Router();
const {
  getQuizDetailers,
  createQuizDetailers,
  updateQuizDetailers,
  deleteQuizDetailer,
  setActiveQuiz,
  setInActiveQuiz,
  createQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion,
} = require("./quiz.controller");

router.get("/", getQuizDetailers);
router.post("/create/:teacherId", createQuizDetailers);
router.post("/update/:quizId", updateQuizDetailers);
router.delete("/delete/:quizId", deleteQuizDetailer);
router.put("/active/:quizId", setActiveQuiz);
router.put("/inactive/:quizId", setInActiveQuiz);
router.post("/question/create/:quizId", createQuestion);
router.delete("/question/delete/:questionId", deleteQuestion);
router.post("/question/update/:questionId", updateQuestion);
router.get("/question/:quizId", getQuestion);

module.exports = router;
