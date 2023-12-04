import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BallsStateStructure, BallsStructure } from "./types";

const initialBallsSlice: BallsStateStructure = {
  balls: [],
};

const ballsSlice = createSlice({
  name: "balls",
  initialState: initialBallsSlice,
  reducers: {
    loadBalls: (
      currentState,
      action: PayloadAction<BallsStructure[]>,
    ): BallsStateStructure => ({
      ...currentState,
      balls: action.payload,
    }),
  },
});

export const { loadBalls: loadBallsActionCreator } = ballsSlice.actions;
export const ballsReducer = ballsSlice.reducer;
