let documentModel = require("../models/document.model");

//Get Documents by Supervisor
const getCategoryDocuments = async (req, res) => {
  let id = req.params.staffID;
  documentModel
    .find({ supervisorID: id })
    .then((documents) => {
      res.status(200).json({
        success: true,
        documentList: documents,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, error: err.message });
    });
};

//Get Documents by groupID
const getCategoryDocumentsGroup = async (req, res) => {
  let id = req.params.groupID;
  documentModel
    .find({ groupID: id })
    .then((documents) => {
      res.status(200).json({
        success: true,
        documentList: documents,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, error: err.message });
    });
};

//Get all Documents
const getAllDocuments = async (req, res) => {
  documentModel
    .find()
    .then((documents) => {
      res.json({
        success: true,
        documentList: documents,
      });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

module.exports = {
  getCategoryDocuments,
  getCategoryDocumentsGroup,
  getAllDocuments,
};
