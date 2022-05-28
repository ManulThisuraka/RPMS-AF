let EvaluatePresentations = require("../models/EvaluatePresentation.model");

//Save EvaluatePresentation Details
const createEvaluatePresentation = async (req, res) => {
  let newEvaluatePresentations = new EvaluatePresentations(req.body);

  newEvaluatePresentations.save((err) => {
    console.log(newEvaluatePresentations._id);
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: " Saved successfully",
      data: newEvaluatePresentations._id,
    });
  });
};

//Get All EvaluatePresentation Details
const getAllEvaluatePresentations = async (req, res) => {
  EvaluatePresentationModel.find()
    .then((EvaluatePresentations) => {
      res.json({
        success: true,
        EvaluatePresentationsList: EvaluatePresentations,
      });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

//Get specific EvaluatePresentation Details
const getEvaluatePresentation = async (req, res) => {
  let userId = req.params.id;
  EvaluatePresentationModel.findById(userId)
    .then((EvaluatePresentation) => {
      res.status(200).json({ success: true, EvaluatePresentation });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, error: err.message });
    });
};

//Update EvaluatePresentation Details
const updateEvaluatePresentation = async (req, res) => {
  EvaluatePresentationModel.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then(() => {
      res
        .status(200)
        .json({ success: "EvaluatePresentation Details are updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error with updating data", error: err.message });
    });
};

//Delete EvaluatePresentation Details
const deleteEvaluatePresentation = async (req, res) => {
  EvaluatePresentationModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({ status: "EvaluatePresentation Deleted Succesfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Error with deleting EvaluatePresentation",
        error: err.message,
      });
    });
};

module.exports = {
  createEvaluatePresentation,
  getAllEvaluatePresentations,
  getEvaluatePresentation,
  updateEvaluatePresentation,
  deleteEvaluatePresentation,
};
