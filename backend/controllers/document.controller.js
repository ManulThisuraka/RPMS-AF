let documentModel = require("../models/document.model");

//New Document
const createDocument = async (req, res) => {
    const newDocument = new documentModel(req.body);

    newDocument.save().then(() => {
        res.status(200).json({ success: "Document added" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ success: false, error: err.message });
    })
}
//Get Documents by Supervisor
const getCategoryDocuments = async (req, res) => {
    let id = req.params.staffID;
    documentModel.find({ staffID: id })
        .then((documents) => {
            res.status(200).json({ 
                success: true, 
                documentList:documents })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ success: false, error: err.message });
        })
}

//Get all Documents
const getAllDocuments = async (req, res) => {
    documentModel.find().then((documents)=>{
        res.json({
            success:true,
            documentList:documents
        });
    }).catch((err)=>{
        res.json({error:err.message});
    })
}

//Get specific Document
const getDocument = async (req, res) => {
    let userId = req.params.id;
    documentModel.findById(userId)
    .then((document)=>{
        res.status(200).json({success:true,document})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({success: false, error: err.message});
    })
}

//Update Document
const updateDocument = async (req, res) => {
    documentModel.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        })
    .then(()=>{
        res.status(200).json({success: "Document updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with updating data", error: err.message});
    })
}

//Delete Document
const deleteDocument = async (req, res) => {
    documentModel.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).json({status: "Document deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with deleting Document", error: err.message});
    })
}



module.exports = {
    createDocument,
    getCategoryDocuments,
    getAllDocuments,
    getDocument,
    updateDocument,
    deleteDocument
}