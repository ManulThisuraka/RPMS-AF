const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    userID: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true, // Student, Staff, Admin 
    },
    userSubType: {
        type: String,
        required: true, // Student -> learder & normal memeber, Staff -> supervisor, co-supervisor & panel memeber 
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    topicArea: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
        type: String,
        required: false,
    },
    stdID: {
        type: String,
        required: false,
    },
    NIC: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    specialization: {
        type: String,
        required: false,
    },
    panelID: {
      type: String,
      required: false,
    },
    roleID: {
        type: Number,
        default: 0, // 0: student, 1: admin, 2: staff
    },
  },
  { timestamps: true }
);

const User = mongoose.model("AllUser", UsersSchema);

module.exports = User;