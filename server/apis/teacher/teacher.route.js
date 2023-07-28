const router = require("express").Router();
const {
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher
} = require("./teacher.controller");

router.get("/", getTeacher);
router.post("/create", createTeacher);
router.post("/update/:teacherId", updateTeacher);
router.delete("/delete/:teacherId", deleteTeacher);
module.exports = router;
