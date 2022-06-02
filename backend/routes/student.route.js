const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const Assignment = require("../models/assignment");

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
// router.route("/upload").post(upload.single("file"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post("/test/add", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return err.json("File is empty");
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "Template",
      public_id: req.file.originalname,
    });
    console.log(result);

    const assignment = new Assignment({
      asgName: req.body.asgName,
      endDate: req.body.endDate,
      endTime: req.body.endTime,
      department: req.body.department,
      template: result.secure_url,
      cloudinary_id: result.public_id,
      fileName: req.body.fileName,
    });
    await assignment
      .save()
      .then(() => {
        res.json("Assignment Added Successfully...");
      })
      .catch((err) => res.json(err.message));
  } catch (err) {}
});

module.exports = router;
