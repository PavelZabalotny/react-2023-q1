import { configureStore } from "@reduxjs/toolkit";
import searchTextReducer from "@/features/searchText/searchTextSlice";
import { peopleApi } from "@/services/people/people";

export const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
