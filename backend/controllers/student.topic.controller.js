const supervisorRequest = require("../models/research.topic.model");
const Group = require("../models/student.groups.model");

//Create supervisor request with related group & topic
exports.requestSupervisor = async (req, res) => {
  const { groupID, supervisorID, topic, co_supervisorID } = req.body;

  const reqSupervisor = new supervisorRequest();
  reqSupervisor.groupID = groupID;
  reqSupervisor.supervisorID = supervisorID;
  reqSupervisor.co_supervisorID = co_supervisorID;
  reqSupervisor.topic = topic;

  await reqSupervisor.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: " Supervisor requested successfully",
      data: reqSupervisor.groupID, //return the topic id
    });
  });
};



exports.getGroupsByUser = async (req, res) => {
  //reqSupervisor, co_supervisorID
  const  supervisorID = req.query.supervisor;
  const co_supervisorID = req.query.co_supervisor;
  if(supervisorID != 'null') {

  }
  else if(co_supervisorID != 'null') {
    
  } else {

  }
  res.json({
    success:true,
    groupList:groups
});
  // reqSupervisor.find({groupID}).then((groups)=>{
  //     res.json({
  //         success:true,
  //         groupList:groups
  //     });
  // }).catch((err)=>{
  //   return res.status(400).json({
  //     error: err
  //   });
  // })
}

//
