let FinalMarks = require("../models/FinalMarks.model");

//Save FinalMarks Details
const createFinalMark = async (req, res) => {
  let newFinalMarks = new FinalMarks(req.body);

  newFinalMarks.save((err) => {
    console.log(newFinalMarks._id);
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: " Saved successfully",
      data: newFinalMarks._id,
    });
  });
};

//Get All FinalMarks Details
const getAllFinalMarks = async (req, res) => {
  FinalMarks.find()
    .then((FinalMarks) => {
      res.json({
        success: true,
        FinalMarksList: FinalMarks,
      });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

//Get specific FinalMark Details
const getFinalMark = async (req, res) => {
  let userId = req.params.id;
  FinalMarks.findById(userId)
    .then((FinalMark) => {
      res.status(200).json({ success: true, FinalMark });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, error: err.message });
    });
};

//Update FinalMark Details
const updateFinalMark = async (req, res) => {
  FinalMarks.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then(() => {
      res.status(200).json({ success: "FinalMarks Details are updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error with updating data", error: err.message });
    });
};

//Delete FinalMark Details
const deleteFinalMark = async (req, res) => {
  FinalMarks.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ status: "FinalMarks Deleted Succesfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({
          status: "Error with deleting FinalMark",
          error: err.message,
        });
    });
};

module.exports = {
  createFinalMark,
  getAllFinalMarks,
  getFinalMark,
  updateFinalMark,
  deleteFinalMark,
};
