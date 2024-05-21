import React from "react";
import { CartItem as StyledCartItem, ProductInfo, ProductImage, ProductContent, ProductName, Quantity, ProductAction, ProductPrice, DeleteButton } from "./StyledComponents";

const CartItem = ({ item, handleDelete }) => {
  return (
    <StyledCartItem>
      <ProductInfo>
        <div style={{ display: "flex", gap: "10px" }}>
          <ProductImage
            src={item?.productId?.imageUrl || "https://via.placeholder.com/100"}
            alt={item?.productId?.name}
          />
          <ProductContent>
            <ProductName>{item?.productId?.name}</ProductName>
            <Quantity>Color: {item?.productId?.color}</Quantity>
            <Quantity>Quantity: {item?.quantity || 1}</Quantity>
          </ProductContent>
        </div>
        <ProductAction>
          <DeleteButton onClick={() => handleDelete(item?.productId)}>x</DeleteButton>
          <ProductPrice>₹{(item?.productId?.price * item?.quantity)?.toFixed(2)}</ProductPrice>
        </ProductAction>
      </ProductInfo>
    </StyledCartItem>
  );
};

export default CartItem;
