import { createReducer } from "@reduxjs/toolkit";
import { TeamKey, Round } from "./types";
import * as actions from "./actions";
export interface GameState {
  charactersLeftToGuess: string[];
  isReady: boolean;
  teamGuessing: TeamKey;
  round: Round;
  points: Record<TeamKey, number>;
  timeLeft: number | null;
  currentCharacter: string | null;
}

export const initialState: GameState = {
  charactersLeftToGuess: [],
  isReady: false,
  teamGuessing: "A",
  round: 1,
  points: {
    A: 0,
    B: 0
  },
  timeLeft: null,
  currentCharacter: null
};

const reducer = createReducer(initialState, builder =>
  builder
    .addCase(actions.addPoints, (state, action) => ({
      ...state,
      points: {
        ...state.points,
        [state.teamGuessing]: state.points[state.teamGuessing] + action.payload
      }
    }))
    .addCase(actions.setIsReady, (state, action) => ({
      ...state,
      isReady: action.payload
    }))
    .addCase(actions.setRound, (state, action) => ({
      ...state,
      round: action.payload
    }))
    .addCase(actions.setTeamGuessing, (state, action) => ({
      ...state,
      teamGuessing: action.payload
    }))
    .addCase(actions.setTimeLeft, (state, action) => ({
      ...state,
      timeLeft: action.payload
    }))
    .addCase(actions.setCharactersLeftToGuess, (state, action) => ({
      ...state,
      charactersLeftToGuess: action.payload
    }))
    .addCase(actions.setCurrentCharacter, (state, { payload }) => ({
      ...state,
      currentCharacter: payload
    }))
);

export default reducer;
