const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    documentHeader :{
        type : String,
        required : true
    },
    documentDescription :{
        type : String,
        required : true
    },
    staffID :{
        type : String 
    },
    groupID :{
        type : String
    },
    inputDoc :{
        type : String
    },
    status :{
        type : String,
        default:"Pending"
    }
})


module.exports = mongoose.model("Documents",DocumentSchema);