const express = require("express");
const app = express();
const connectDB = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");

//Import routes
const studentRoute = require("./routes/student.route");

//App middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Import routes
const NoticesRouter = require("./routes/notice.route");
const DocumentsRouter = require("./routes/document.route");
const UsersRouter = require("./routes/regUser.route");
const AdminsRouter = require("./routes/admin.route");

//Import routes
const StaffRoutes = require("./routes/staff.route");

//App middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(NoticesRouter);
app.use(DocumentsRouter);
app.use(UsersRouter);
app.use(AdminsRouter);

//route middleware
app.use(StaffRoutes)

//route middleware
app.use(studentRoute);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
