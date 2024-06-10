// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import Footer from "@/components/Footer"
import Login from "@/view/Login";
import SignUp from "@/view/SignUp";
import Terms from "@/view/Terms";
import Privacy from "@/view/Privacy";
import RefundPolicy from "@/view/RefundPolicy";
import ContactUs from "@/view/ContactUs";

const PublicLayout = ({ children }) => (
  <div>
    <Header />
    <Outlet />
    <Footer />
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
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/terms-and-conditions",
        element: <Terms />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
    ],
  },
];

export default publicRoutes;
