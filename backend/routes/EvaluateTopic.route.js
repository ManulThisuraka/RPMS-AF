//Write the http requests in create, update and delete crud functions

const express = require("express");
let controller = require("../Controllers/EvaluateTopic.controller");
const EvaluateTopics = require("../models/EvaluateTopic.model"); // import user model
const router = express.Router();

const EvaluateTopic = require("../models/EvaluateTopic.model");

//Save EvaluateTopic Details
router.post("/EvaluateTopics/save", controller.createEvaluateTopic);

//Get All EvaluateTopic Details
router.get("/EvaluateTopic/view/", controller.getAllEvaluateTopics);

//Get a specific EvaluateTopic Details
router.get("/EvaluateTopics/view/:id", controller.getEvaluateTopic);

//Update EvaluateTopic Details
router.put("/EvaluateTopics/update/:id", controller.updateEvaluateTopic);

//Delete EvaluateTopic
router.delete("/EvaluateTopics/delete/:id", controller.deleteEvaluateTopic);

module.exports = router;
