// Импортируйте необходимые зависимости
import { createSlice } from "@reduxjs/toolkit";
import { CardItems } from "../../interfaces/card-items/CardItems";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as CardItems[],
  reducers: {
    addToFavorite: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
