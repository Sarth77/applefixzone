import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productsReducer from "./productSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
