// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   minPrice: null,
//   maxPrice: null,
// };
// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     STORE_PRODUCTS(state, action) {
//       console.log(action.payload);
//       state.products = action.payload.products;
//     },
//     GET_PRICE_RANGE(state, action) {
//       const { products } = action.payload;
//       const array = [];
//       products.map((product) => {
//         const price = product.price;
//         return array.push(price);
//       });
//       const max = Math.max(...array);
//       const min = Math.min(...array);

//       state.minPrice = min;
//       state.maxPrice = max;
//     },
//   },
// });

// export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

// export const selectProducts = (state) => state.product.products;
// export const selectMinPrice = (state) => state.product.minPrice;
// export const selectMaxPrice = (state) => state.product.maxPrice;

// export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  try {
    const response = await axios.get(
      "https://api-9av6.onrender.com/api/products",
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});

const productsSlice = createSlice({
  name: "productlist",
  initialState: {
    products: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.company = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

// Selectors
export const selectProducts = (state) => state.productlist.products;
export const selectLoadingState = (state) => state.productlist.isLoading;
export const selectErrorState = (state) => state.productlist.hasError;

export default productsSlice.reducer;
