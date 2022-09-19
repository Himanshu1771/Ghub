import { configureStore } from "@reduxjs/toolkit";
import GetReducer from "./todosSlice";

export const store = configureStore({
  reducer: {
    store: GetReducer,
  },
});