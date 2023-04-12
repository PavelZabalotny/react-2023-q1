import { configureStore } from "@reduxjs/toolkit";
import searchTextReducer from "@/features/searchText/searchTextSlice";

export const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
