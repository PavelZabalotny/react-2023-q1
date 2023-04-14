import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchTextState {
  value: string;
}

const initialState: ISearchTextState = {
  value: "",
};

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { add } = searchTextSlice.actions;

export default searchTextSlice.reducer;
