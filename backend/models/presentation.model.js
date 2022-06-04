const mongoose = require("mongoose");

const PresentationSchema = new mongoose.Schema({
    presentationHeader :{
        type : String,
        required : true
    },
    presentationDescription :{
        type : String,
        required : true
    },
    panelID :{
        type : String 
    },
    groupID :{
        type : String
    },
    docURL :{
        type : String
    }
})


module.exports = mongoose.model("Presentations",PresentationSchema);