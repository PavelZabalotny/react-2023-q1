import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchTextState {
  value: string;
  isLoading: boolean;
}

const initialState: ISearchTextState = {
  value: "",
  isLoading: false,
};

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { add, isLoading } = searchTextSlice.actions;

export default searchTextSlice.reducer;
