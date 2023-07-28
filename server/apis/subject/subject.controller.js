const Subject = require("./subject.model");
const getSubject = async (req, res, next) => {
  try {
    const response = await Subject.find();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createSubject = async (req, res, next) => {
  try {
    const response = new Subject(req.body);
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateSubject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateSubject = await Subject.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.send(updateSubject);
  } catch (error) {
    next(error);
  }
};
const deleteSubject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteSubject = await Subject.deleteOne({ _id: id });
    res.send(deleteSubject);
  } catch (error) {
    next(error);
  }
};
module.exports = { getSubject, createSubject, updateSubject, deleteSubject };
