const Gender = require("./gender.model");
const getGender = async (req, res, next) => {
  try {
    const response = await Gender.find();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createGender = async (req, res, next) => {
  try {
    const response = new Gender(req.body);
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateGender = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateGender = await Gender.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.send(updateGender);
  } catch (error) {
    next(error);
  }
};
const deleteGender = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteGender = await Gender.deleteOne({ _id: id });
    res.send(deleteGender);
  } catch (error) {
    next(error);
  }
};
module.exports = { getGender, createGender, updateGender, deleteGender };
