const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
    noticeHeader :{
        type : String,
        required : true
    },
    roleID :{
        type : Number, // (0)Student,(1)Admin,(2)staff
        required : true
    },
    notice :{
        type : String,
        required : true
    },
    outputDoc :{
        type : String,
    },
    inputDoc :{
        type : String,
    }
})


module.exports = mongoose.model("Notices",NoticeSchema);