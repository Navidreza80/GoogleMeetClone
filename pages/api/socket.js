import { Server } from "socket.io";

export default function SocketHandler(req, res) {
  if (!res.socket.server.io) {
    console.log("Starting Socket.IO server...");
    const io = new Server(res.socket.server, {
      path: "/api/socketio",
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Client connected:", socket.id);

      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  } else {
    console.log("Socket.IO server already running");
  }
  res.end();
}
