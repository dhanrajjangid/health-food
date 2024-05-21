import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const CartButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex-center"
      style={{
        display: `${location?.pathname === "/cart" ? "none" : "flex"}`,
        cursor: "pointer",
        height: "2.5rem",
        position: "fixed",
        width: "2.5rem",
        marginLeft: "auto",
        bottom: "30px",
        zIndex: 10,
        backgroundColor: "#14c2bf",
        color: "#fff",
        borderRadius: "100%",
        padding: "0.4rem",
        right: `${screenWidth < 768 ? "30px" : "60px"}`,
      }}
      onClick={() => navigate("/cart")}
    >
      <AiOutlineShoppingCart size={28} />
    </div>
  );
};

export default CartButton;
