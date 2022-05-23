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

//route middleware
app.use(studentRoute);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
