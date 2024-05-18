import { getApiData } from '@/services/ApiService';

export const useItemDetail = () => {

  const getProductById = async (id) => {
    try {
      const response = await getApiData(`/product/${id}`);
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  return getProductById;
};
