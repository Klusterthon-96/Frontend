import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Landing } from "./Layouts";
import LoginPage from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import ErrorPage from "./page/404Page";
import LandingPage from "./page/LandingPage";
import HomePage from "./page/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <HomePage />,
      },
      {
        path: "/dashboard/inputs",
        element: <Home />,
      },
      {
        path: "/dashboard/settings",
        element: <Home />,
      },
      {
        path: "/dashboard/help-center",
        element: <Home />,
      },
      {
        path: "/dashboard/refer",
        element: <Home />,
      },
    ],
  },
]);
