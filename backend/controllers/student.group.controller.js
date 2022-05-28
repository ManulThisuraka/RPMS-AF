const express = require("express");
const Group = require("../models/student.groups.model");

// exports.createStudentGroup = (req, res) => {
//     const group = new Group({
//         groupid : req.body.groupid,
//         department : req.body.department,
//         memberLeader : req.body.memberLeader,
//         memberone: req.body.memberone,
//         membertwo : req.body.membertwo,
//         mamberthree : req.body.mamberthree

//     });

//     group
//     .save()
//     .then(() => res.json("Groups Added Successfully..."))
//     .catch((err) => res.json(err.message));
// };

exports.createStudentGroup = async (req, res) => {
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
