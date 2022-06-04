const express = require("express");
const bodyParser = require("body-parser");
const Student = require("../models/student.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

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
    const user = await Student.find({ stdEmail });
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

exports.signinController = async (req, res) => {
  console.log(req.body);
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await Student.findOne({ stdEmail: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      // user
      res.status(200).json(user);
    }
    res.status(400).send({ message: "Invalid Credentials" });
  } catch (err) {
    console.log(err);
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

//Specific Data retrive
exports.getUserInfoById = async (req, res) => {
  let userId = req.params.id;

  Student.findById(userId, (err, user) => {
    if (err) {
      return res.status(400).json({ isSuccess: false, err });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  });
};
