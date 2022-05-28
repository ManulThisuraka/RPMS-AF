let EvaluateTopics = require("../models/EvaluateTopic.model");

//Save EvaluateTopic Details
const createEvaluateTopic = async (req, res) => {
  let newEvaluateTopics = new EvaluateTopics(req.body);

  newEvaluateTopics.save((err) => {
    console.log(newEvaluateTopics._id);
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: " Saved successfully",
      data: newEvaluateTopics._id,
    });
  });
};

//Get All EvaluateTopic Details
const getAllEvaluateTopics = async (req, res) => {
  EvaluateTopics.find()
    .then((EvaluateTopics) => {
      res.json({
        success: true,
        EvaluateTopicsList: EvaluateTopics,
      });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

//Get specific EvaluateTopic Details
const getEvaluateTopic = async (req, res) => {
  let userId = req.params.id;
  EvaluateTopics.findById(userId)
    .then((EvaluateTopic) => {
      res.status(200).json({ success: true, EvaluateTopic });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, error: err.message });
    });
};

//Update EvaluateTopic Details
const updateEvaluateTopic = async (req, res) => {
  EvaluateTopics.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then(() => {
      res.status(200).json({ success: "EvaluateTopic Details are updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error with updating data", error: err.message });
    });
};

//Delete EvaluateTopic Details
const deleteEvaluateTopic = async (req, res) => {
  EvaluateTopics.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ status: "EvaluateTopic Deleted Succesfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "Error with deleting EvaluateTopics",
        error: err.message,
      });
    });
};

module.exports = {
  createEvaluateTopic,
  getAllEvaluateTopics,
  getEvaluateTopic,
  updateEvaluateTopic,
  deleteEvaluateTopic,
};
