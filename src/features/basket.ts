import { createSlice } from "@reduxjs/toolkit";
import { BasketItemType, BasketState } from "../@types/basket";

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: { payload: BasketItemType }) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.slug !== action.payload);
    },
    increaseQuantity(state, action) {
      const productSlug = action.payload;
      const updatedBasket = state.items.map((item) => {
        if (productSlug === item.slug) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      state.items = updatedBasket;
    },
    decreaseQuantity(state, action) {
      const productSlug = action.payload;
      const updatedBasket = state.items.map((item) => {
        if (productSlug === item.slug) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      state.items = updatedBasket;
    },
  },
});

export default basketSlice.reducer;

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  basketSlice.actions;
