import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/src/components/cart/CartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
