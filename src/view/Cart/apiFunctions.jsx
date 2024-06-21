import { getApiData, postApiData } from "@/services/ApiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCart = () => {
  const navigate = useNavigate();
  const razor_key_id = import.meta.env.REACT_APP_RAZORPAY_KEY_ID

  const getCartItems = async ({ player_id, setCartItems }) => {
    try {
      const response = await getApiData(`/cart/${player_id}`);
      setCartItems(response?.cart?.items);
      return response;
    } catch (error) {
      console.error("Remove failed:", error);
      throw error;
    }
  };

  const removeItem = async (payload) => {
    try {
      const response = await postApiData(`/cart/remove`, { ...payload });
      toast.success("Item removed successfully");
      return response;
    } catch (error) {
      console.error("Remove failed:", error);
      throw error;
    }
  };

  const createOrder = async (playerId, items) => {
    try {
      const response = await postApiData("/order/createOrder", {
        playerId,
        items,
      });
      navigate("/order-confirm");
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const handlePayment = async (data) => {
    try {
      // Step 1: Create an order on the backend
      const orderResponse = await postApiData('/order/createOrder', data);
      const { amount, razorpayOrderId } = orderResponse;
  
      // Step 2: Initialize Razorpay and open the checkout
      const options = {
        key: razor_key_id, 
        amount: amount,
        currency: 'INR',
        name: 'Dhanraj Jangid',
        description: 'Test Transaction',
        order_id: razorpayOrderId,
        handler: async (response) => {
          const { razorpay_payment_id, razorpay_signature } = response;
          // Step 3: Verify the payment on the backend
          const paymentData = {
            razorpay_order_id: razorpayOrderId,
            razorpay_payment_id: razorpay_payment_id,
            razorpay_signature: razorpay_signature
          };
  
          const verificationResponse = await postApiData('/payment/verifyPayment', paymentData);
  
          if (verificationResponse.status === 'success') {
            navigate('/order-success');
          } else {
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'Test User',
          email: 'test.user@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };
  
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment failed');
    }
  };
  
  

  return { createOrder, getCartItems, removeItem, handlePayment };
};
