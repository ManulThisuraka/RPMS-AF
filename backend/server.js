const express = require("express");
const app = express();
const connectDB = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

<<<<<<< HEAD
const chatRoomController = require("./controllers/chat.controller");

//Import routes
const studentRoute = require("./routes/student.route");
const staffRoute = require("./routes/staff.route")
=======
require("dotenv").config();

>>>>>>> 476e6234fdc8332e8e287f33ad623f683dad06eb
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
const panelMemberRoutes = require("./routes/PanelMember.route");
const EvaluateTopicRoutes = require("./routes/EvaluateTopic.route");
const EvaluatePresentation = require("./routes/EvaluatePresentation.route");
const FinalMarks = require("./routes/FinalMarks.route");

//route middleware
app.use(NoticesRouter);
app.use(DocumentsRouter);
app.use(UsersRouter);
app.use(AdminsRouter);

app.use(panelMemberRoutes);
app.use(EvaluateTopicRoutes);
app.use(EvaluatePresentation);
app.use(FinalMarks);

//route middleware
app.use(studentRoute);
app.use(staffRoute);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside server");
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

/** Chat Implementation  */

const io = require('socket.io')(server);

//Chat Scocket begin

const connectedClients = {};

io.on('connection', (client) => {

  console.log("New client connected");

  //Client Sent a message
  client.on("SendMessage", async (messageData) => {
    // chatRoomData.push(messageData)
    await chatRoomController.store(messageData)
    console.log('client', client.id);
    await sendUpdatedChatRoomData(client, messageData.groupId)
  })

  client.on("GetMessages", async (groupId) => {
    await sendUpdatedChatRoomData(client, groupId)
  })

  //Disconnecting from chat room...
  client.on('disconnecting', async (data) => {
    console.log("Client disconnecting...");
    if(connectedClients[client.id]){
      delete connectedClients[client.id]
    }

  });
})

//Sending update chat data to all connected clients
async function  sendUpdatedChatRoomData(client, id){
  const allChatRoomData= await chatRoomController.findAll(id)
  client.emit("RetrieveChatRoomData", allChatRoomData)
  client.broadcast.emit("RetrieveChatRoomData", allChatRoomData)

}
