const User = require("./admin.model");
const getAdmins = async (req, res) => {
  try {
    const response = await User.find();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const createAdmin = async (req, res, next) => {
  try {
    const response = new User(req.body);
    await response.save();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const updateAdmin = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const updateUser = await User.updateOne({ _id: id }, { $set: req.body });
    res.send(updateUser); 
  } catch (error) {
    next(error);
  }
};
module.exports = { getAdmins, createAdmin, updateAdmin };
