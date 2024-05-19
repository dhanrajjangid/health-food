import { getApiData, postApiData } from "@/services/ApiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCart = () => {
  const navigate = useNavigate();

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

  return { createOrder, getCartItems, removeItem };
};
