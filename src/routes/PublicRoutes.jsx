// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import Footer from "@/components/Footer"
import Login from "@/view/Login";
import SignUp from "@/view/SignUp";
import Terms from "@/view/Policies/TermsAndConditions";
import Privacy from "@/view/Policies/PrivacyPolicy";
import RefundPolicy from "@/view/Policies/RefundPolicy";
import ContactUs from "@/view/ContactUs";
import ShippingPolicy from "@/view/Policies/ShippingPolicy";
import CancellationPolicy from "@/view/Policies/CancellationPolicy";

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
      {
        path: "/shipping-policy",
        element: <ShippingPolicy />,
      },
      {
        path: "/cancellation-policy",
        element: <CancellationPolicy />,
      },
    ],
  },
];

export default publicRoutes;
