import { getApiData, postApiData } from "@/services/ApiService";
import { toast } from "react-toastify";
import { useHome } from "@/view/Home/apiFunctions";

export const useItemDetail = () => {
  const { getCartCount } = useHome();

  const getProductById = async (id) => {
    try {
      const response = await getApiData(`/product/${id}`);
      return response;
    } catch (error) {
      console.error("error in fetcging product data:", error);
      throw error;
    }
  };

  const addToCart = async (payload) => {
    try {
      const response = await postApiData(`/cart/add`, { ...payload });
      toast.success("Item Added to cart");
      getCartCount(payload?.player_id)
      return response;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  };

  return { getProductById, addToCart };
};
