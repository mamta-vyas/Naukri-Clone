import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import wishlistReducer from "../redux/wishlistSlice";
import userReducer from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    user: userReducer,
  },
});
