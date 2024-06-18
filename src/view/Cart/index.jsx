import React, { useEffect, useState } from "react";
import { CartPageContainer, CartHeader } from "./Components/StyledComponents";
import { useCart } from "./apiFunctions";
import { ContainedButton } from "../../components/Common/FormInputs";
import CartItem from "./Components/CartItem";
import CartCalculations from "./Components/CartCalculations";
import ShippingForm from "./Components/ShippingForm";
import SuccessPopup from "../../components/Popups/SuccessPopup";

const CartPage = () => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;
  const { handlePayment, getCartItems, removeItem } = useCart();

  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

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

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <CartPageContainer>
      {showPopup && (
        <SuccessPopup
          message="This is test environment, Order can not be placed."
          onClose={handlePopupClose}
        />
      )}
      <CartHeader>Cart</CartHeader>
      {cartItems?.map((item, index) => (
        <CartItem key={index} item={item} handleDelete={handleDelete} />
      ))}
      <CartCalculations totalPrice={totalPrice} />
      <ShippingForm />
      <ContainedButton
        backgroundColor="#3B3C36"
        borderColor="#3B3C36"
        hoverColor="#3B3C36"
        // borderRadius='0'
        // onClick={() => createOrder(player_id, cartList)}
        onClick={() => handlePayment(player_id)}
      >
        Confirm Order
      </ContainedButton>
    </CartPageContainer>
  );
};

export default CartPage;
