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

//App middleware
app.use(bodyParser.json());
app.use(cors());

//Import student routes
const studentRoute = require("./routes/student.route");

//Import notice routes
const NoticesRouter = require("./routes/notice.route");
const DocumentsRouter = require("./routes/document.route");
const UsersRouter = require("./routes/regUser.route");
const AdminsRouter = require("./routes/admin.route");

//Import panel member routes
const panelMemberRoutes = require("./routes/panelMember.route");

//route middleware
app.use(NoticesRouter);
app.use(DocumentsRouter);
app.use(UsersRouter);
app.use(AdminsRouter);

app.use(panelMemberRoutes);

//route middleware
app.use(studentRoute);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
