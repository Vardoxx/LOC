import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./favorite/favorite.slice";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
