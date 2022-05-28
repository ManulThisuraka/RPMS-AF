//Write the http requests in create, update and delete crud functions

const express = require("express");
let controller = require("../Controllers/EvaluatePresentation.controller");
const EvaluatePresentations = require("../models/EvaluatePresentation.model"); // import user model
const router = express.Router();

const EvaluatePresentation = require("../models/EvaluatePresentation.model");

//Save EvaluateTopic Details
router.post("/EvaluatePresentation/save", controller.createEvaluatePresentation);

//Get All EvaluatePresentation Details
router.get("/EvaluatePresentation/view/", controller.getAllEvaluatePresentations);

//Get a specific EvaluatePresentation Details
router.get("/EvaluateTopics/view/:id", controller.getEvaluatePresentation);

//Update EvaluatePresentation Details
router.put("/EvaluatePresentations/update/:id", controller.updateEvaluatePresentation);

//Delete EvaluatePresentation
router.delete("/EvaluatePresentations/delete/:id", controller.deleteEvaluatePresentation);

module.exports = router;
