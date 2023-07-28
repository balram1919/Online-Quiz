const router = require("express").Router();
const {
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} = require("./subject.controller");

router.get("/", getSubject);
router.post("/create", createSubject);
router.post("/update/:id", updateSubject);
router.delete("/delete/:id", deleteSubject);

module.exports = router;
