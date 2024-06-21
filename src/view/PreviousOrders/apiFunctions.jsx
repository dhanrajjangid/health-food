import { getApiData } from "@/services/ApiService";

export const usePrevious = () => {
  const getOrders = async (playerId, items) => {
    try {
      const response = await getApiData(`/order/${playerId}`);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const getOrderById = async (orderId) => {
    try {
      const response = await getApiData(`/order/orderDetail/${orderId}`);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  return { getOrders, getOrderById };
};
