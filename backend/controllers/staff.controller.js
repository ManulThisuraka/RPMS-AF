const Staff = require("../models/staff.model");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { jwtSecret, jwtExpire } = require("../config/keys");

//Signup controllers
exports.StaffSignUpController = async (req, res) => {
  const {
    firstName,
    lastName,
    staffId,
    designationType,
    topicArea,
    email,
    username, 
    password,
  } = req.body;

  try {
    const user = await Staff.findOne({ email });
    if (user) {
      return res.status(400).json({
        errorMessage: "Email already exists",
      });
    }

    const newStaff = new Staff();
    newStaff.firstName = firstName;
    newStaff.lastName = lastName;
    newStaff.staffId = staffId;
    newStaff.designationType = designationType;
    newStaff.topicArea = topicArea;
    newStaff.email = email;
    newStaff.username = username;

    const salt = await bcrypt.genSalt(10);
    newStaff.password = await bcrypt.hash(password, salt);

    await newStaff.save();

    res.json({
      successMessage: "Registration Success. Please SignIn",
    });
  } catch (err) {
    console.log("StaffSignUpController error:", err);
    res.status(500).json({
      errorMessage: "Server Error",
    });
  }
};

//Retrive the staff details in backend
exports.getStaffInfo = async (req, res) => {
  Staff.find().exec((err, staff1) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingStaff: staff1,
    });
  });
};

//Specific Data retrive
exports.getStaffInfoById = async (req, res) => {
  let userId = req.params.id;

  Staff.findById(userId, (err, staff) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      staff,
    });
  });
};

//Delte the data from the backend
exports.deleteStaffController = async (req, res) => {
    Staff.findByIdAndDelete(req.params.id).exec((err, deleteStaff) => {
      if (err)
        return res.status(400).json({
          message: "Delete unsuccessfull",
          err,
        });
  
      return res.json({
        message: "Delete Successfull",
        deleteStaff,
      });
    });
};