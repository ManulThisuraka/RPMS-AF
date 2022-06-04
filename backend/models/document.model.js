const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    documentDescription :{
        type : String,
        required : true
    },
    supervisorID :{
        type : String 
    },
    groupID :{
        type : String
    },
    docURL :{
        type : String
    }
})


module.exports = mongoose.model("Documents",DocumentSchema);