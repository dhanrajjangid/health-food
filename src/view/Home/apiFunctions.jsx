import { getApiData } from "@/services/ApiService";
import { actions as cartActions } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export const useHome = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const response = await getApiData("/product");
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const getCartCount = async (player_id) => {
    try {
      const response = await getApiData(`/cart/count/${player_id}`);
      dispatch(cartActions.setCartCount(response?.totalItems));
      return response;
    } catch (error) {
      console.error("Remove failed:", error);
      throw error;
    }
  };

  return { getProducts, getCartCount };
};
