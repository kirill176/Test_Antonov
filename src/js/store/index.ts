import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./redusers/todoReducer";

export const store = configureStore({
  reducer: todoReducer,
});

export type AppDispatch = typeof store.dispatch;
