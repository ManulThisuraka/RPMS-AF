//Write the http requests in create, update and delete crud functions

const express = require("express");
let controller = require("../Controllers/FinalMarks.controller");
const FinalMarks = require("../models/FinalMarks.model"); // import user model
const router = express.Router();

//Save FinalMarks Details
router.post("/FinalMarks/save", controller.createFinalMark);

//Get All FinalMarks Details
router.get("/FinalMarks/view/", controller.getAllFinalMarks);

//Get a specific FinalMark Details
router.get("/FinalMarks/view/:id", controller.getFinalMark);

//Update FinalMark Details
router.put("/FinalMarks/update/:id", controller.updateFinalMark);

//Delete FinalMark
router.delete("/FinalMarks/delete/:id", controller.deleteFinalMark);

module.exports = router;
