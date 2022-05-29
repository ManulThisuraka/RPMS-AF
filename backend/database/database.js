const mongoose = require("mongoose");
require("dotenv").config();

var Url = process.env.test;

console.log("Url", Url);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin123@recentrocluster.omuv3.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
