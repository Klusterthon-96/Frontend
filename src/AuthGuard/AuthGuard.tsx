import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();

    if (!user) {
        <Navigate to="/" />;
    }

    return <>{children}</>;
}

export function GuestGuard({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();

    if (user) {
        <Navigate to="/dashboard" />;
    }

    return <>{children}</>;
}
