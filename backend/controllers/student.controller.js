const Student = require("../models/student.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const { jwtSecret, jwtExpire } = require("../config/keys");

exports.signupController = async (req, res) => {
  const {
    fullName,
    stdID,
    NIC,
    stdEmail,
    password,
    phoneNumber,
    specialization,
    roleID,
  } = req.body;

  try {
    const user = await Student.findOne({ stdEmail });
    if (user) {
      return res.status(400).json({
        errorMessage: "Email already exists",
      });
    }

    const newUser = new Student();
    newUser.fullName = fullName;
    newUser.stdID = stdID;
    newUser.NIC = NIC;
    newUser.stdEmail = stdEmail;
    newUser.password = password;
    newUser.phoneNumber = phoneNumber;
    newUser.specialization = specialization;
    newUser.roleID = roleID;

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    res.json({
      successMessage: "Registration Success. Please Sign-In",
    });
  } catch (err) {
    console.log("signupController error:", err);
    res.status(500).json({
      errorMessage: "Server Error",
    });
  }
};

//Retrive the user details in backend
exports.getAllUsers = async (req, res) => {
  Student.find().exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUser: user,
    });
  });
};
