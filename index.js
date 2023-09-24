import express from "express"; // nodejs framework
import { createServer } from "node:http"; // http server - main server
import { Server } from "socket.io"; // socket server - for realtime bidirectional communication

// Creating instance (Initialization)
const app = express();
const server = createServer(app);
const io = new Server(server);

// dummy variable for sample code only
let count = 0;

// Sending client file to server - For sample code only
app.get("/", (req, res) => {
  res.sendFile(new URL("./view/index.html", import.meta.url).pathname);
});

// Socket code
io.on("connection", (socket) => {
  console.log("a user connected");

  // Receive message from client to server:  SERVER <-- CLIENT
  // "chat message" is a string used to identify the type of message. Same used in client code also
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });

  /**
   * Send message to client from server: SERVER --> CLIENT.
   */
  setInterval(() => {
    io.emit("chat message", "Hello from server");
    io.emit("chat message", count);
    count++;
  }, 5000);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
