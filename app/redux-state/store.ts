import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";

export const makeStore = () =>
  configureStore({
    reducer: { cartReducer },
  });
export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
