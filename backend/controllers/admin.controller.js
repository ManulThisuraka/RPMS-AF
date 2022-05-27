let adminModel = require("../models/admin.model");

//New Admin
const createAdmin = async (req, res) => {
    const newAdmin = new adminModel(req.body);

    newAdmin.save().then(() => {
        res.status(200).json({ success: "Admin added" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ success: false, error: err.message });
    })
}

//Get all Admins
const getAllAdmins = async (req, res) => {
    adminModel.find().then((admins)=>{
        res.json({
            success:true,
            adminList:admins
        });
    }).catch((err)=>{
        res.json({error:err.message});
    })
}

//Get specific Admin
const getAdmin = async (req, res) => {
    let staffId = req.params.staffID;
    adminModel.find({ staffID: staffId })
    .then((admin)=>{
        res.status(200).json({success:true,admin})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({success: false, error: err.message});
    })
}

//Delete Admin
const deleteAdmin = async (req, res) => {
    adminModel.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).json({status: "Admin deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with deleting Admin", error: err.message});
    })
}



module.exports = {
    createAdmin,
    getAllAdmins,
    getAdmin,
    deleteAdmin
}