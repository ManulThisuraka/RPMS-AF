const express = require("express");
const router = express.Router();

const {
  signupController,
  getAllUsers,
} = require("./../controllers/student.controller");
const Student = require("./../models/student.model");

//Save details
router.post("/register", signupController);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
