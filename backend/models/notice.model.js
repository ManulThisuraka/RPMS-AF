const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
    noticeHeader :{
        type : String,
        required : true
    },
    roleID :{
        type : String, //All(0),student(1),staff(2)
        required : true
    },
    noticeCategory :{
        type : String, //topic,download,notice,presentation,document
        required : true
    },
    description :{
        type : String,
    },
    docURL :{
        type : String,
    }
})


module.exports = mongoose.model("Notices",NoticeSchema);