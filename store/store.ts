import { configureStore } from "@reduxjs/toolkit";
import game1Reducer from "./slice/game1.slice";
import game2Reducer from "./slice/game2.slice";

export const store = configureStore({
  reducer: {
    game1: game1Reducer,
    game2: game2Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
