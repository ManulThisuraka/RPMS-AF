const mongoose = require("mongoose");

const panelmemberSchema = new mongoose.Schema({
  panelmemberID: {
    type: String,
    require: true,
  },
  panelmemberemail: {
    type: String,
    required: true,
  },
  researchArea: {
    type: String,
    required: true,
  },
  panelGroup: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Panelmember", panelmemberSchema);
