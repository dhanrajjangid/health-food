import React from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/slices/listingSlice";
import { useCart } from "./apiFunctions";
import { ContainedButton } from "../../components/Common/FormInputs";

const CartPage = () => {
  const dispatch = useDispatch();
  const createOrder = useCart();
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;

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
      <CartHeader>Cart</CartHeader>
      {cartList?.map((item, index) => (
        <CartItem key={index}>
          <ProductInfo>
            <div style={{ display: "flex", gap: "10px" }}>
              <ProductImage
                src={item?.imageUrl || "https://via.placeholder.com/100"}
                alt={item.name}
              />
              <ProductContent>
                <ProductName>{item?.name}</ProductName>
                <Quantity>Color: {item?.color}</Quantity>
                <Quantity>Quantity: {item?.quantity || 1}</Quantity>
              </ProductContent>
            </div>
            <ProductAction>
              <DeleteButton onClick={() => handleDelete(item.id)}>
                x
              </DeleteButton>
              <ProductPrice>${item?.price?.toFixed(2)}</ProductPrice>
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
        borderColor='#3B3C36'
        hoverColor= '#3B3C36'
        // borderRadius='0'
        onClick={() => createOrder(player_id, cartList)}
      >
        Confirm Order
      </ContainedButton>
    </CartPageContainer>
  );
};

export default CartPage;
