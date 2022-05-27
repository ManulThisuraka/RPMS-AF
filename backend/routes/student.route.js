const express = require("express");
const router = express.Router();

const {
  signupController,
  getAllUsers,
  signinController,
  getUserInfoById,
} = require("./../controllers/student.controller");
const Student = require("./../models/student.model");

//Student routes
router.post("/register", signupController);
router.get("/getAllUsers", getAllUsers);
router.post("/login", signinController);
router.get("/user/:id", getUserInfoById);

module.exports = router;
