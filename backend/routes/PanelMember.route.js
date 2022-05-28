//Write the http requests in create, update and delete crud functions

const express = require("express");
let controller = require("../Controllers/PanelMember.controller");
// const PanelMembers = require("../models/PanelMember.model"); // import user model
const router = express.Router();

const PanelMember = require("../models/PanelMember.model");

//Save PanelMember Details
router.post("/panelMembers/save", controller.createPanelMember);

//Get All PanelMember Details
router.get("/PanelMembers/view/", controller.getAllPanelMembers);

//Get a specific PanelMember Details
router.get("/PanelMembers/view/:id", controller.getPanelMember);

//Update PanelMember Details
router.put("/PanelMembers/update/:id", controller.updatePanelMember);

//Delete PanelMember
router.delete("/PanelMembers/delete/:id", controller.deletePanelMember);

module.exports = router;
