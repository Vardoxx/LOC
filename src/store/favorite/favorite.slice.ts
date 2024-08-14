import { createSlice } from "@reduxjs/toolkit";
import { CardItems } from "../../interfaces/card-items/CardItems";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as CardItems[],
  reducers: {
    addToFavorite: (state, action) => {
      const card = action.payload;
      const existingItemIndex = state.findIndex((i) => i.id === card.id);
      if (existingItemIndex === -1) state.push(card);
    },
    removeFromFavorites: (state, action) => {
      const card = action.payload;
      return state.filter((i) => i.id !== card.id);
    },
  },
});

export const { addToFavorite, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
