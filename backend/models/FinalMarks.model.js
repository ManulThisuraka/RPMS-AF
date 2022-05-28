const mongoose = require("mongoose");

const FinalMarkSchema = new mongoose.Schema({
  
  studentGroupID: {
    type: String,
    require: true,
  },
  panelGroupID: {
    type: String,
    require: true,
  },
  Finalviva: {
    type: String,
    required: true,
  },
  Finalpresentation: {
    type: String,
    required: true,
  },
  evaluation_01: {
    type: String,
    required: true,
  },
  evaluation_02: {
    type: String,
    required: true,
  },
  finalmark: {
    type: String,
    required: true,
  },
  finalgrade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FinalMarks", FinalMarkSchema);
