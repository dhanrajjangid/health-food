import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify"; // Import ToastContainer as well
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
