import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const token = user.data.accessToken;

  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !token) {
      return navigate("/auth/login", { replace: true });
    } else if (user && token) {
      return navigate("/dashboard", { replace: true });
    }
  }, [user, token]);

  return <>{children}</>;
}
