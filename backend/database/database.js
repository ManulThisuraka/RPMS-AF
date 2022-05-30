const mongoose = require("mongoose");
require("dotenv").config();

var Url = process.env.MONGO_URL;

console.log("Url", Url);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
