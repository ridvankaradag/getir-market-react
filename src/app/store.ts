import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import filterReducer from "../features/filter";
import productReducer from "../features/product";

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
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
