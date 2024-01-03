import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import sellerReducer from "./sellerReducer";

const rootReducer = {
  product: productReducer,
  cart: cartReducer,
  category: categoryReducer,
  user: userReducer,
  seller: sellerReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
