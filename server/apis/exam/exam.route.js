const router = require("express").Router();
const {
  getExam,
  submitExam,
} = require("./exam.controller");

router.get("/:quizId", getExam);
router.post("/submit/:studentId/:quizId", submitExam);
module.exports = router;
