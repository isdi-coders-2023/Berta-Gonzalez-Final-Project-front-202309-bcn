import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BallsStateStructure, BallsStructure } from "./types";

const initialBallsSlice: BallsStateStructure = {
  balls: [],
  selectedBall: {} as BallsStructure,
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
    deleteBalls: (
      currentState,
      action: PayloadAction<string>,
    ): BallsStateStructure => ({
      ...currentState,
      balls: currentState.balls.filter((ball) => ball._id !== action.payload),
    }),
    addBall: (
      currentState: BallsStateStructure,
      action: PayloadAction<BallsStructure>,
    ): BallsStateStructure => ({
      ...currentState,
      balls: [...currentState.balls, action.payload],
    }),
    loadSelectedBall: (
      currentState,
      action: PayloadAction<BallsStructure>,
    ) => ({
      ...currentState,
      selectedBall: action.payload,
    }),
    modifyBall: (
      currentState: BallsStateStructure,
      action: PayloadAction<BallsStructure>,
    ): BallsStateStructure => ({
      ...currentState,
      balls: currentState.balls.map((ball) =>
        ball._id !== action.payload._id ? ball : action.payload,
      ),
    }),
    toggleHaveBalls: (
      currentState,
      action: PayloadAction<string>,
    ): BallsStateStructure => ({
      ...currentState,
      balls: currentState.balls.map((ball) => ({
        ...ball,
        isTengui: ball._id === action.payload ? !ball.isTengui : ball.isTengui,
      })),
    }),
  },
});

export const {
  loadBalls: loadBallsActionCreator,
  deleteBalls: deleteBallsActionCreator,
  addBall: addBallActionCreator,
  loadSelectedBall: loadSelectedBallActionCreator,
  modifyBall: modifyBallActionCreator,
  toggleHaveBalls: toggleHaveBallsActionCreator,
} = ballsSlice.actions;
export const ballsReducer = ballsSlice.reducer;
