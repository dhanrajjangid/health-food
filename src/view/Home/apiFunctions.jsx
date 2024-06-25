import { getApiData } from "@/services/ApiService";
import { actions as cartActions } from "@/redux/slices/cartSlice";

export const useHome = () => {
  const getProducts = async (email, password) => {
    try {
      const response = await getApiData("/product");
      //   dispatch(authActions.login(response?.data));
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
