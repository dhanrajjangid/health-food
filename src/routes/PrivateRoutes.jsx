import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import MobileMenuButton from "@/components/MenuButton";
import Home from "@/view/Home";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/redux/slices/sidebarSlice";
import { actions as authActions } from "@/redux/slices/authSlice";
import Profile from "@/view/Profile";
import ItemDetail from "@/view/ItemDetail";
import CartButton from "../components/CartButton";
import Cart from "../view/Cart";
import OrderConfirm from "../view/Cart/Components/OrderConfirm";
import PreviousOrders from "../view/PreviousOrders";
import Loader from "@/components/Common/Loader";
import Footer from "@/components/Footer";
import Terms from "@/view//Policies/TermsAndConditions";
import Privacy from "@/view/Policies/PrivacyPolicy";
import RefundPolicy from "@/view/Policies/RefundPolicy";
import ContactUs from "@/view/ContactUs";
import OrderSuccess from "@/view/OrderSuccess";
import OrderDetails from "@/view/PreviousOrders/OrderDetails";

const PrivateLayout = ({ children }) => {
  const dispatch = useDispatch();
  const storedUser = localStorage.getItem("user");
  const loading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    // Check localStorage for user data and dispatch login action if user is found
    if (storedUser) {
      dispatch(authActions.login(JSON.parse(storedUser)));
    }
  }, [storedUser]);

  return storedUser ? (
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
            marginTop: "50px",
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
  ) : (
    <Navigate to="/login" />
  );
};

const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order-confirm",
        element: <OrderConfirm />,
      },
      {
        path: "/order-history",
        element: <PreviousOrders />,
      },
      {
        path: "/order-history/:id",
        element: <OrderDetails />,
      },
      {
        path: "/item-detail/:id",
        element: <ItemDetail />,
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
        path: "/order-success",
        element: <OrderSuccess />,
      },
    ],
  },
];

export default privateRoutes;
