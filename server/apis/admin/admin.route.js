const router = require("express").Router();
const { getAdmins, createAdmin, updateAdmin } = require("./admin.controller");

router.get("/", getAdmins);
router.post("/create", createAdmin);
router.post("/update/:userId", updateAdmin);
module.exports = router;
