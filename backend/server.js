const express = require("express");
const app = express();
const connectDB = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");

//Import routes
const NoticesRouter = require("./routes/notice.route");
const DocumentsRouter = require("./routes/document.route");
const UsersRouter = require("./routes/regUser.route");
const AdminsRouter = require("./routes/admin.route");

//App middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(NoticesRouter);
app.use(DocumentsRouter);
app.use(UsersRouter);
app.use(AdminsRouter);


connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
