import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPopupOpen: false,
};

const authPopupSlice = createSlice({
  name: 'authPopup',
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      state.isPopupOpen = !state.isPopupOpen;
    }
    
  },
});

export const { actions, reducer } = authPopupSlice;
export default authPopupSlice.reducer;
