const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

//Student Registration/ Login
const {
  signupController,
  getAllUsers,
  signinController,
  getUserInfoById,
} = require("./../controllers/student.controller");

//Student Group
const {
  createStudentGroup,
  getAllStudentGroups,
} = require("../controllers/student.group.controller");

//Student Research Topic
const {
  requestSupervisor,
  test,
} = require("../controllers/student.topic.controller");

//topic Registation
let topiccontroller = require('../Controllers/student.topic.panel.controller');

//Student routes
router.post("/register", signupController);
router.get("/getAllUsers", getAllUsers);
router.post("/login", signinController);
router.get("/user/:id", getUserInfoById);

//Student group routes
router.post("/studentgroup/create", createStudentGroup);
router.get("/studentgroup/getAll", getAllStudentGroups);

//Research topic routes
router.post("/topic/create", requestSupervisor);

//topics Registation
router.post('/topics/add',topiccontroller.createTopic);
router.get('/topics/view',topiccontroller.getAllTopics);
router.get('/topics/viewByGroup/:groupID',topiccontroller.getCategoryTopicsGroup);
router.get('/topics/viewByPanel/:panelID',topiccontroller.getCategoryTopics);
router.get('/topics/view/:id',topiccontroller.getTopic);
router.delete('/topics/update/:id',topiccontroller.updateTopic);

//File upload
router.route("/upload").post(upload.single("photo"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
