const mongoose = require("mongoose");

const submitToPanel = new mongoose.Schema({
  groupID: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  supervisorID: {
    type: String,
    required: true,
  },
  co_supervisorID: {
    type: String,
    required: true,
  },
  docURL: {
    type: String,
    //required: true,
  },
  panelID: {
    type: String,
    //required: true,
  },
  status: {
    //Accepted, Rejected, Pending
    type: String,
    //required: true,
  },
  comment: {
    type: String,
    //required: true,
  },
});

module.exports = mongoose.model("topics.panel", submitToPanel);
