const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("Survey for Planets...");
});

const votes = {
  earth: 0,
  mars: 0,
  jupiter: 0,
};

io.on("connection", (socket) => {
  console.log("a user connected");

  // Send data to new connected user
  socket.emit("new-vote", votes);

  // Listen for the new vote
  socket.on("new-vote", (vote) => {
    votes[vote] += 1;

    // Send new votes object to ALL connected users
    io.emit("new-vote", votes);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
