const topicModel = require("../models/student.topics.panel.model");
 
//New Topic
const createTopic = async (req, res) => {
  const newTopic = new topicModel(req.body);

  newTopic.save().then(() => {
      res.status(200).json({ success: "Topic registered" });
  }).catch((err) => {
      console.log(err);
      res.status(500).send({ success: false, error: err.message });
  })
}

//Get all Topics
const getAllTopics = async (req, res) => {
  topicModel.find().then((topics)=>{
      res.json({
          success:true,
          topicList:topics
      });
  }).catch((err)=>{
      res.json({error:err.message});
  })
}

//Get Topics by groupID
const getCategoryTopicsGroup = async (req, res) => {
  let id = req.params.groupID;
  topicModel.find({ groupID: id })
      .then((topics) => {
          res.status(200).json({ 
              success: true, 
              topicList:topics })
      }).catch((err) => {
          console.log(err);
          res.status(500).send({ success: false, error: err.message });
      })
}

//Get Topics by panelID
const getCategoryTopics = async (req, res) => {
  let id = req.params.panelID;
  topicModel.find({ panelID: id })
      .then((topics) => {
          res.status(200).json({ 
              success: true, 
              topicList:topics })
      }).catch((err) => {
          console.log(err);
          res.status(500).send({ success: false, error: err.message });
      })
}

//Get specific Topic
const getTopic = async (req, res) => {
  let userId = req.params.id;
  topicModel.findById(userId)
  .then((Topic)=>{
      res.status(200).json({success:true,Topic})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({success: false, error: err.message});
  })
}

//Update Topic 
const updateTopic = async (req, res) => {
  topicModel.findByIdAndUpdate(req.params.id,
      {
          $set:req.body
      })
  .then(()=>{
      res.status(200).json({success: "Topic updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).json({status: "Error with updating data", error: err.message});
  })
}

module.exports = {
  createTopic,
  getAllTopics,
  getCategoryTopicsGroup,
  getCategoryTopics,
  getTopic,
  updateTopic
}


