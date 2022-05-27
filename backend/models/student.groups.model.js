const mongoose = require("mongoose");
const STDGroupSchema = new mongoose.Schema(
  {
    groupID: {
      type: String,
      required: true,
    },
    staffID: {
      type: String,
      required: true,
    },
    panelID: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const STDGroup = mongoose.model("student.groups", STDGroupSchema);
module.exports = STDGroup;
