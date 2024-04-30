import React from "react";
import {
  CartPageContainer,
  CartItem,
  ProductInfo,
  ProductName,
  TotalPrice,
  DeleteButton,
} from "./Components/StyledComponents";
import { ContainedButton } from "../../components/Common/FormInputs";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/slices/listingSlice";
import { useCart } from "./apiFunctions";

const CartPage = () => {
  const dispatch = useDispatch();
  const createOrder = useCart();
  const player_id = JSON.parse(localStorage.getItem('user'))?.player_id

const cartList = useSelector((state)=> state.listing.cartList)
console.log(cartList,"Deleted item with id:");

  let totalPrice = 0;
  for (const product of cartList) {
    totalPrice += product.price;
  }

  const handleDelete = (id) => {
    dispatch(actions.removeCartItem(id));
  };

  return (
    <CartPageContainer>
      <h2>Cart</h2>
      {cartList?.map((item, index) => (
        <CartItem key={index}>
          <ProductInfo>
            <ProductName>{item.name}</ProductName>
            <DeleteButton onClick={() => handleDelete(item.id)}>
              Delete
            </DeleteButton>
          </ProductInfo>
          <div>Price: ${item.price}</div>
        </CartItem>
      ))}
      <TotalPrice>Total: ${totalPrice}</TotalPrice>
      <ContainedButton onClick={()=> createOrder(player_id, cartList)}>Confirm Order</ContainedButton>
    </CartPageContainer>
  );
};

export default CartPage;
