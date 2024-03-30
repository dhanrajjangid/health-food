import React, {useState, useEffect} from "react";
import { AiOutlineShoppingCart   } from "react-icons/ai";

const CartButton = () => {
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
        display: `${screenWidth < 768 ? "flex" : "none"}`,
        cursor: "pointer",
        height: "2.5rem",
        position: "fixed",
        width: "2.5rem",
        marginLeft: "auto",
        left: "10px",
      }}
      onClick={() => alert('cart button')}
    >
      <AiOutlineShoppingCart  size={28} />
    </div>
  );
};

export default CartButton;
