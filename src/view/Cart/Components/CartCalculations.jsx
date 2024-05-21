import React from "react";
import { Calculations, TotalPrice } from "./StyledComponents";

const CartCalculations = ({ totalPrice }) => {
  return (
    <Calculations>
      <TotalPrice>
        Subtotal: <span>₹{totalPrice?.toFixed(2)}</span>
      </TotalPrice>
      <TotalPrice>
        Discount: <span>₹{'0.00'}</span>
      </TotalPrice>
      <TotalPrice>
        Tax: <span>₹{'0.00'}</span>
      </TotalPrice>
      <TotalPrice>
        Total: <span>₹{totalPrice?.toFixed(2)}</span>
      </TotalPrice>
    </Calculations>
  );
};

export default CartCalculations;
