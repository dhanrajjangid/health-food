import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/redux/slices/sidebarSlice";

const MobileMenuButton = () => {
  const isOpen = useSelector((state) => state.sidebar.open);
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
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(actions.toggleSidebar(!isOpen));
  };
  return (
    <div
      className="flex-center"
      style={{
        boxSizing: "border-box",
        display: `${screenWidth < 768 ? "flex" : "none"}`,
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        width: "100%",
        height: "2.5rem",
        // position: "fixed",
        // width: "2.5rem",
        // marginLeft: "auto",
        // right: "10px",
      }}
      onClick={() => toggleSidebar()}
    >
      <p
        style={{
          boxSizing: 'border-box',
          fontWeight: 500,
          // color: "#14c2bf",
          fontSize: "1.5rem",
          margin: 0,
          paddingLeft: "0.5rem",
          fontStyle: 'italic'
        }}
      >
        BuY MinimaL
      </p>

      {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
    </div>
  );
};

export default MobileMenuButton;
