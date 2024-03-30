// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import Login from "@/view/Login";
import SignUp from "@/view/SignUp";

const PublicLayout = ({ children }) => (
  <div>
    <Header />
    <Outlet />
    {/* <Footer /> */}
  </div>
);

const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default publicRoutes;
