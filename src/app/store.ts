import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import filterReducer from "../features/filter";
import productReducer from "../features/product";
import basketReducer from "../features/basket";

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    basket: basketReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
