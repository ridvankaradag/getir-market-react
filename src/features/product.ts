import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../@types/product";

const initialState: ProductState = {
  isLoading: false,
  error: false,
  products: [],
  totalCount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload.data;
      state.totalCount = action.payload.totalCount;
    },
  },
});

export default productSlice.reducer;

export const { startLoading, hasError, getProductsSuccess } =
  productSlice.actions;
