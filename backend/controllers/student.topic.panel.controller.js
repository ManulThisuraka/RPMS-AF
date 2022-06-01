const panelRequest = require("../models/student.topics.panel.model");

//Create supervisor request with related group & topic
exports.requestSupervisor = async (req, res) => {
  const { groupID, topic, supervisorID, co_supervisorID, topicDocument } =
    req.body;

  const reqPanelTopic = new panelRequest();
  reqPanelTopic.groupID = groupID;
  reqPanelTopic.topic = topic;
  reqPanelTopic.supervisorID = supervisorID;
  reqPanelTopic.co_supervisorID = co_supervisorID;
  reqPanelTopic.topicDocument = topicDocument;

  await reqPanelTopic.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: " Supervisor requested successfully",
      data: reqPanelTopic.groupID, //return the topic id
    });
  });
};
