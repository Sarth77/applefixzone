import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";
import productsReducer from "./productSlice";
import { middlewareApi } from "./api/middlewareApi";
import cartReducer from "./cart/cartSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
  [middlewareApi.reducerPath]: middlewareApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareApi.middleware),
});

setupListeners(store.dispatch);
export default store;
