const mongoose = require("mongoose");

const evaluatePresentationSchema = new mongoose.Schema({
  panelGroupID: {
    type: String,
    require: true,
  },
  studentGroupID: {
    type: String,
    require: true,
  },
  presentationDoc: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "EvaluatePresentation",
  evaluatePresentationSchema
);
