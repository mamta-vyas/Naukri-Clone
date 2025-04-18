import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
<<<<<<< HEAD
import wishlistReducer from "../redux/wishlistSlice";
import userReducer from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    user: userReducer,
=======


export const store = configureStore({
  reducer: {
    auth: authReducer,
>>>>>>> c03cd1d (Forntend part of app client side done)
  },
});
