const router = require("express").Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteStudent,
} = require("./student.controller");

router.get("/", getUsers);
router.post("/create", createUser);
router.post("/update/:studentId", updateUser);
router.delete("/delete/:studentId", deleteStudent);
module.exports = router;
