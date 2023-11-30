import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ballsReducer } from "./features/balls/ballsSlice";

export const store = configureStore({
  reducer: {
    ballsState: ballsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
