import { postApiData } from '@/services/ApiService';
import { useNavigate } from 'react-router-dom';

export const useCart = () => {
  const navigate = useNavigate()
  const createOrder = async (playerId, items) => {
    try {
      const response = await postApiData('/order/createOrder', { playerId, items });
      navigate('/order-confirm')
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  return createOrder;
};
