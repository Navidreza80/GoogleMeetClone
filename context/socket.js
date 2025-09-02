"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    fetch("/api/socket");

    const connection = io({
      path: "/api/socketio",
    });

    connection.on("connect", () => {
      console.log("Connected to server", connection.id);
    });

    connection.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    setSocket(connection);

    return () => {
      connection.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
