import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Landing } from "./Layouts";
import LoginPage from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import ErrorPage from "./page/404Page";
import LandingPage from "./page/LandingPage";
import HomePage from "./page/HomePage";
import InputForm from "./page/InputForm";
import Response from "./page/InputForm/response";

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
    errorElement: <ErrorPage />,
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <HomePage />,
      },
      {
        path: "/dashboard/inputs",
        element: <InputForm />,
      },
      {
        path: "/dashboard/settings",
        element: <Response />,
      },
      {
        path: "/dashboard/help-center",
        element: <InputForm />,
      },
      {
        path: "/dashboard/refer",
        element: <InputForm />,
      },
    ],
  },
]);
