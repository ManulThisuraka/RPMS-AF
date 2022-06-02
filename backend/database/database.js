const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect(
      "mongodb+srv://admin:admin123@recentrocluster.omuv3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
=======
    await mongoose.connect("mongodb+srv://admin:admin123@recentrocluster.omuv3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
>>>>>>> fb3141dc5c7d7c1c909ff3271336319e81dc35c9
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
