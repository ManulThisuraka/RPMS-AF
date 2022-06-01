const express = require("express");
const router = express.Router();
const {
  StaffsignupValidator,
  validatorResult,
} = require("../middleware/staffValidator");
const {
  StaffSignUpController,
  deleteStaffController,
  getStaffInfo,
  getStaffInfoById,
} = require("../controllers/staff.controller");
const Staff = require("../models/staff.model");

//Save details
router.post("/staffSignup", StaffsignupValidator, validatorResult, StaffSignUpController);

//Get all the details
router.get("/staff1", getStaffInfo);

//Specific data retrive
router.get("/staff/:id", getStaffInfoById);

//Staff delete
router.delete("/delete/:id", deleteStaffController);

module.exports = router;