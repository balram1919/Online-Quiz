const router = require("express").Router();
const {
  getGender,
  createGender,
  updateGender,
  deleteGender,
} = require("./gender.controller");

router.get("/", getGender);
router.post("/create", createGender);
router.post("/update/:id", updateGender);
router.delete("/delete/:id", deleteGender);

module.exports = router;
