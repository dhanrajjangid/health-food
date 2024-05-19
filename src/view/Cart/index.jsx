import React, { useEffect, useState } from "react";
import {
  CartPageContainer,
  CartHeader,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Calculations,
  TotalPrice,
  DeleteButton,
  Quantity,
  ProductContent,
  ProductAction,
} from "./Components/StyledComponents";
import { useCart } from "./apiFunctions";
import { ContainedButton } from "../../components/Common/FormInputs";

const CartPage = () => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;
  const { createOrder, getCartItems, removeItem } = useCart();

  const [cartItems, setCartItems] = useState([]);

  const getCart = () => {
    getCartItems({ player_id, setCartItems });
  };

  useEffect(() => {
    if (player_id) {
      getCart();
    }
  }, [player_id]);

  let totalPrice = 0;
  for (const product of cartItems) {
    totalPrice += product?.productId?.price;
  }

  const handleDelete = async (id) => {
    await removeItem({ playerId: player_id, productId: id });
    getCart();
  };

  return (
    <CartPageContainer>
      <CartHeader>Cart</CartHeader>
      {cartItems?.map((item, index) => (
        <CartItem key={index}>
          <ProductInfo>
            <div style={{ display: "flex", gap: "10px" }}>
              <ProductImage
                src={
                  item?.productId?.imageUrl || "https://via.placeholder.com/100"
                }
                alt={item?.productId?.name}
              />
              <ProductContent>
                <ProductName>{item?.productId?.name}</ProductName>
                <Quantity>Color: {item?.productId?.color}</Quantity>
                <Quantity>Quantity: {item?.quantity || 1}</Quantity>
              </ProductContent>
            </div>
            <ProductAction>
              <DeleteButton onClick={() => handleDelete(item?.productId)}>
                x
              </DeleteButton>
              <ProductPrice>
                ${(item?.productId?.price * item?.quantity)?.toFixed(2)}
              </ProductPrice>
            </ProductAction>
          </ProductInfo>
        </CartItem>
      ))}
      <Calculations>
        <TotalPrice>
          Subtotal: <span>${totalPrice?.toFixed(2)}</span>
        </TotalPrice>
        <TotalPrice>
          Discount: <span>${totalPrice?.toFixed(2)}</span>
        </TotalPrice>
        <TotalPrice>
          Tax: <span>${totalPrice?.toFixed(2)}</span>
        </TotalPrice>
        <TotalPrice>
          Total: <span>${totalPrice?.toFixed(2)}</span>
        </TotalPrice>
      </Calculations>
      <ContainedButton
        backgroundColor="#3B3C36"
        borderColor="#3B3C36"
        hoverColor="#3B3C36"
        // borderRadius='0'
        onClick={() => createOrder(player_id, cartList)}
      >
        Confirm Order
      </ContainedButton>
    </CartPageContainer>
  );
};

export default CartPage;
