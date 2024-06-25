import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from '@/redux/slices/sidebarSlice';
import authReducer from '@/redux/slices/authSlice'
import listingReducer from '@/redux/slices/listingSlice'
import loadingReducer from '@/redux/slices/loadingSlice'
import authPopupReducer from '@/redux/slices/authPopupSlice';
import cartReducer from '@/redux/slices/cartSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  listing: listingReducer,
  loading: loadingReducer,
  authPopup: authPopupReducer,
  cart: cartReducer
});

export default rootReducer;
