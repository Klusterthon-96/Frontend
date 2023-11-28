import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  // const token = user?.data?.accessToken;

  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.data) {
      return navigate("/", { replace: true });
    } else if (user) {
      return navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return <>{children}</>;
}
