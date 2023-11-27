import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Landing } from "./Layouts";
import LoginPage from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import ErrorPage from "./page/404Page";
import LandingPage from "./page/LandingPage";
import HomePage from "./page/HomePage";
import InputForm from "./page/InputForm";
import HelpCenter from "./page/HelpCenter";
import ForgotPassword from "./page/Auth/ForgotPassword";
import ResetPassword from "./page/Auth/ResetPassword";
import Response from "./page/InputForm/response";
import EmailVerification from "./page/HomePage/EmailVerification";
import PendingEmailVerification from "./page/HomePage/PendingEmailVerification";

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
        path: "/auth/reset-password/:id/:token",
        element: <ResetPassword />,
      },
      {
        path: "/auth/email-verification/:token",
        element: <EmailVerification />,
      },
      {
        path: "/auth/pending-email-verification",
        element: <PendingEmailVerification/>
      }
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
        path: "/dashboard/support",
        element: <HelpCenter />,
      },
      {
        path: "/dashboard/refer",
        element: <Response />,
      },
    ],
  },
]);
