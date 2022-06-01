const express = require("express");
const router = express.Router();
const {StaffsignupValidator,ActTopicValidator, validatorResult} = require("../middleware/staffValidator");
const {StaffSignUpController,deleteStaffController,getStaffInfo,getStaffInfoById} = require("../controllers/staff.controller");
const {createActTopicController,getActTopicInfo,getActTopicInfoById,updateActTopic,deleteActTopicController} = require("../controllers/acceptTopic.controller");

const Users = require("../models/Users.model");

/** Begin of Staff  Signup Routes **/
//Staff Save details
router.post("/staff/save", StaffsignupValidator, validatorResult, StaffSignUpController);
//Staff Get all the details
router.get("/staff/view", getStaffInfo);
//Staff Specific data retrive
router.get("/staff/view/:id", getStaffInfoById);
//Staff delete
router.delete("/staff/delete/:id", deleteStaffController);
/** End of Staff  Signup Routes **/


/** Begin of Accept Topic Routes **/
//Accept Topic save 
router.post("/actTopic/save", ActTopicValidator, validatorResult, createActTopicController );
//Accept Topic Get all details 
router.get("/actTopic/view", getActTopicInfo);
//Get specifict topic accept detail
router.get("/actTopic/view/:id", getActTopicInfoById);
//Update the topic details 
router.put("/actTopic/update/:id", updateActTopic);
//Delete the accepted topic details 
router.delete("/actTopic/delete/:id", deleteActTopicController);
/** End of Accept Topic Routes **/


module.exports = router;