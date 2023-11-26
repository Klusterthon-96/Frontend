import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Landing } from "./Layouts";
import LoginPage from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import ErrorPage from "./page/404Page";
import LandingPage from "./page/LandingPage";
import HomePage from "./page/HomePage";
import InputForm from "./page/InputForm";
import HelpCenter from "./components/HelpCenter";
import ForgotPassword from "./page/Auth/ForgotPassword";
import EmailConfirmation from "./page/Auth/EmailConfirmation";
import ResetPassword from "./page/Auth/ResetPassword";

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
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/email-confirmation",
        element: <EmailConfirmation />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
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
        element: <Home />,
      },
      {
        path: "/dashboard/help-center",
        element: <HelpCenter />,
      },
      {
        path: "/dashboard/refer",
        element: <Home />,
      },
    ],
  },
]);
