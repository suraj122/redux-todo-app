import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
