import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from '@/redux/slices/sidebarSlice';
import authReducer from '@/redux/slices/authSlice'
import listingReducer from '@/redux/slices/listingSlice'
import loadingReducer from '@/redux/slices/loadingSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  listing: listingReducer,
  loading: loadingReducer
});

export default rootReducer;
