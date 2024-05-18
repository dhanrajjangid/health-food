import React from "react";
import {
  CartPageContainer,
  CartHeader,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  TotalPriceContainer,
  TotalPrice,
  DeleteButton,
  Quantity
} from "./Components/StyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/slices/listingSlice";
import { useCart } from "./apiFunctions";
import { ContainedButton } from "../../components/Common/FormInputs";

const CartPage = () => {
  const dispatch = useDispatch();
  const createOrder = useCart();
  const player_id = JSON.parse(localStorage.getItem('user'))?.player_id;

  const cartList = useSelector((state) => state.listing.cartList);
  console.log(cartList, "Deleted item with id:");

  let totalPrice = 0;
  for (const product of cartList) {
    totalPrice += product.price;
  }

  const handleDelete = (id) => {
    dispatch(actions.removeCartItem(id));
  };

  return (
    <CartPageContainer>
      <CartHeader>Shopping Cart</CartHeader>
      {cartList?.map((item, index) => (
        <CartItem key={index}>
          <ProductImage src={item.image || "https://via.placeholder.com/100"} alt={item.name} />
          <ProductInfo>
            <div>
              <ProductName>{item.name}</ProductName>
              <DeleteButton onClick={() => handleDelete(item.id)}>Remove</DeleteButton>
            </div>
            <div>
              <Quantity>Qty: {item.quantity}</Quantity>
              <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
            </div>
          </ProductInfo>
        </CartItem>
      ))}
      <TotalPriceContainer>
        <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
        <ContainedButton onClick={() => createOrder(player_id, cartList)}>Confirm Order</ContainedButton>
      </TotalPriceContainer>
    </CartPageContainer>
  );
};

export default CartPage;
