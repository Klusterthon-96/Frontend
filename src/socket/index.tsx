import React, { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

// Create SocketContext
const SocketContext = createContext<Socket | undefined>(undefined);

// Provide the SocketContext to the component tree
export const SocketProvider: React.FC<{ url: string; children: React.ReactNode }> = ({ url, children }) => {
    const socket = io(url);
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

// Hook to access the socket instance
export const useSocket = (): Socket => {
    const socket = useContext(SocketContext);
    if (!socket) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return socket;
};
