import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export default function AuthGuard() {
  const { user } = useAuth();
  // if (isLogged === true) {
  //   return <Navigate to="/" />;
  //   // navigate("/", { replace: true });
  // }
  return (
    <>
      {/* <Navigate /> */}
    </>
  );
}
