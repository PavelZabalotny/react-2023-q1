import { IFormCard } from "@/interfaces/formCard.interface";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface IFormCardsState {
  cards: IFormCard[];
}

const initialState: IFormCardsState = {
  cards: [],
};

export const formCards = createSlice({
  name: "formCards",
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<IFormCard>) => {
      state.cards.push(action.payload as Draft<IFormCard>);
    },
  },
});

export const { addFormCard } = formCards.actions;

export default formCards.reducer;
