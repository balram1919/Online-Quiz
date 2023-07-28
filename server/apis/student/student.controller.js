const User = require("./student.model");
const getUsers = async (req, res, next) => {
  try {
    const response = await User.find({ role: "student" })
      .populate("gender")
      .populate("subject");
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createUser = async (req, res, next) => {
  try {
    const response = new User({ ...req.body, role: "student" });
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const id = req.params.studentId;
    const updateUser = await User.updateOne({ _id: id }, { $set: req.body });
    res.send(updateUser);
  } catch (error) {
    next(error);
  }
};
const deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.studentId;
    const deleteStudent = await User.deleteOne({ _id: id });
    res.send(deleteStudent);
  } catch (error) {
    next(error);
  }
};
module.exports = { getUsers, createUser, updateUser, deleteStudent };
