let presentationModel = require("../models/presentation.model");


//Get presentations by panelID
const getCategoryPresentations = async (req, res) => {
    let id = req.params.panelID;
    presentationModel.find({ panelID: id })
        .then((presentations) => {
            res.status(200).json({ 
                success: true, 
                presentationList:presentations })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ success: false, error: err.message });
        })
}

//Get presentations by groupID
const getCategoryPresentationsGroup = async (req, res) => {
    let id = req.params.groupID;
    presentationModel.find({ groupID: id })
        .then((presentations) => {
            res.status(200).json({ 
                success: true, 
                presentationList:presentations })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ success: false, error: err.message });
        })
}

//Get all presentations
const getAllPresentations = async (req, res) => {
    presentationModel.find().then((presentations)=>{
        res.json({
            success:true,
            presentationList:presentations
        });
    }).catch((err)=>{
        res.json({error:err.message});
    })
}







module.exports = {
    getCategoryPresentations,
    getCategoryPresentationsGroup,
    getAllPresentations
}