const mongoose = require("mongoose");

const PresentationSchema = new mongoose.Schema({
    presentationType :{
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
    },
    comments :{
        type : String
    },
    marks :{
        type : String
    }
})


module.exports = mongoose.model("Presentations",PresentationSchema);