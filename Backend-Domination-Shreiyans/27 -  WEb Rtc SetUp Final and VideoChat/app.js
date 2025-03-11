const express = require("express");
const app = express();
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.on("signalingMessage", (message) => {
    socket.broadcast.emit("signalingMessage", message);
  });
});
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000);
