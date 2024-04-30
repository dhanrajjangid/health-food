import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: []
};

const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setCartState: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartList.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity; 
      } else {
        state.cartList.push(newItem);
      }
    },
    removeCartItem: (state, action) => {
      const itemIdToRemove = action.payload; // Assuming your payload has an 'id' field
      state.cartList = state.cartList.filter(item => item.id !== itemIdToRemove);
    }
  },
});

export const { actions, reducer } = listingSlice;
export default listingSlice.reducer;
