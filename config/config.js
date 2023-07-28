const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb://0.0.0.0:27017/practice`,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error" + error.message);
  }
};
module.exports = { connectDB };
