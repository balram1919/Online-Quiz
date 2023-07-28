const Teacher = require("../student/student.model");
const getTeacher = async (req, res, next) => {
  try {
    const response = await Teacher.find({ role: "teacher" })
      .populate("gender")
      .populate("subject");
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createTeacher = async (req, res, next) => {
  try {
    const response = new Teacher({ ...req.body, role: "teacher" });
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateTeacher = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const updateTeacher = await Teacher.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.send(updateTeacher);
  } catch (error) {
    next(error);
  }
};
const deleteTeacher = async (req, res, next) => {
  try {
    const id = req.params.teacherId;
    const deleteTeacher = await Teacher.deleteOne({ _id: id });
    res.send(deleteTeacher);
  } catch (error) {
    next(error);
  }
};
module.exports = { getTeacher, createTeacher, updateTeacher, deleteTeacher };
