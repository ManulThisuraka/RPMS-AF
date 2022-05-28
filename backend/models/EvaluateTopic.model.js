const mongoose = require("mongoose");

const evaluateTopicSchema = new mongoose.Schema({
  panelGroupID: {
    type: String,
    require: true,
  },
  studentGroupID: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EvaluateTopic", evaluateTopicSchema);
