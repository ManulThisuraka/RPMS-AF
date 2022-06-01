const router = require("express").Router();
let controller = require("../Controllers/PanelMember.controller");

// PanelMember Router Paths
router.post("/panelMembers/save", controller.createPanelMember); //Save PanelMember Details
router.get("/PanelMembers/view/", controller.getAllPanelMembers); //Get All PanelMember Details
router.get("/PanelMembers/view/:id", controller.getPanelMember); //Get a specific PanelMember Details
router.put("/PanelMembers/update/:id", controller.updatePanelMember); //Update PanelMember Details
router.delete("/PanelMembers/delete/:id", controller.deletePanelMember); //Delete PanelMember

// // panel Router Paths
// router.post("/panel/save", controller.createPanel); //Save panel Details
// router.get("/panel/view/", controller.getAllPanel); //Get All panel Details
// router.get("/panel/view/:id", controller.getPanel); //Get a specific panel Details
// router.put("/panel/update/:id", controller.updatePanel); //Update panel Details
// router.delete("/panel/delete/:id", controller.deletePanel); //Delete panel

// Final Marks Paths
// router.post("/panel/save", controller.createFinalMark); //Save Final Marks Details
// router.get("/panel/view/", controller.getAllFinalMarks); //Get All Final Marks Details
// router.get("/panel/view/:id", controller.getFinalMark); //Get a specific Final Marks Details
// router.put("/panel/update/:id", controller.updateFinalMark); //Update Final Marks Details
// router.delete("/panel/delete/:id", controller.deleteFinalMark); //Delete Final Marks

module.exports = router;
