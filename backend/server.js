const express = require("express");
const app = express();
const connectDB = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

require("dotenv").config();

//App middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Import routes
const AdminRouter = require("./routes/admin.routes");
//App middleware
app.use(bodyParser.json());
app.use(cors());

//Import student routes
const studentRoute = require("./routes/student.route");


//Import panel member routes
const panelMemberRoutes = require("./routes/PanelMember.route");
const EvaluateTopicRoutes = require("./routes/EvaluateTopic.route");
const EvaluatePresentation = require("./routes/EvaluatePresentation.route");
const FinalMarks = require("./routes/FinalMarks.route");

//route middleware
app.use(AdminRouter);

app.use(panelMemberRoutes);
app.use(EvaluateTopicRoutes);
app.use(EvaluatePresentation);
app.use(FinalMarks);

//route middleware
app.use(studentRoute);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
