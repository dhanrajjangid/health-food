// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { Navigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Login from "@/view/Login";
import SignUp from "@/view/SignUp";
import ResetPassword from "@/view/ResetPassword";
import Terms from "@/view/Policies/TermsAndConditions";
import Privacy from "@/view/Policies/PrivacyPolicy";
import RefundPolicy from "@/view/Policies/RefundPolicy";
import ContactUs from "@/view/ContactUs";
import ShippingPolicy from "@/view/Policies/ShippingPolicy";
import CancellationPolicy from "@/view/Policies/CancellationPolicy";
import MobileMenuButton from "@/components/MenuButton";
import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import Loader from "@/components/Common/Loader";
import CartButton from "@/components/CartButton";
import NewPassword from "@/view/ResetPassword/NewPassword";

const PublicLayout = ({ children }) => {
  const loading = useSelector((state) => state.loading.isLoading);

  return (
    // <div>
    //   <Header />
    //   <Outlet />
    //   <Footer />
    // </div>

    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <div
        style={{
          boxSizing: "border-box",
          padding: "0.5rem",
          width: "100%",
          position: "relative",
        }}
      >
        <MobileMenuButton />
        <div
          style={{
            boxSizing: "border-box",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            marginTop: "1.5rem",
          }}
          onClick={() => dispatch(actions.toggleSidebar(false))}
        >
          <Loader open={loading} />

          <Outlet />
          <Footer />
        </div>
      </div>
      <CartButton />
    </div>
  );
};

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
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/reset-password/:id",
        element: <NewPassword />,
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
