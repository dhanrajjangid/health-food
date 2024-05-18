import { getApiData } from '@/services/ApiService';
// import { actions as authActions } from '@/redux/slices/authSlice';

export const useHome = () => {

  const getProducts = async (email, password) => {
    try {
      const response = await getApiData('/product');
    //   dispatch(authActions.login(response?.data));
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  return getProducts;
};
