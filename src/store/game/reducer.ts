import { Reducer } from "redux";
import { TeamKey, Round, GameActionTypes } from "./types";

export interface GameState {
  charactersLeftToGuess: string[];
  isReady: boolean;
  teamGuessing: TeamKey;
  round: Round;
  points: Record<TeamKey, number>;
  timeLeft: number | null;
  characterToGuess: string | null
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
  characterToGuess: null
};

const reducer: Reducer<GameState, GameActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "game/ADD_POINTS":
      return {
        ...state,
        points: {
          ...state.points,
          [state.teamGuessing]:
            state.points[state.teamGuessing] + action.payload
        }
      };
    case "game/SET_IS_READY":
      return {
        ...state,
        isReady: action.payload
      };

    case "game/SET_ROUND":
      return {
        ...state,
        round: action.payload
      };
    case "game/SET_TEAM_GUESSING":
      return {
        ...state,
        teamGuessing: action.payload
      };
    case "game/SET_CHARACTERS_LEFT_TO_GUESS":
      return {
        ...state,
        charactersLeftToGuess: action.payload
      }
    case "game/SET_TIME_LEFT":
      return {
        ...state,
        timeLeft: action.payload
      }
    case "game/TICK":
      return {
        ...state,
        timeLeft: state.timeLeft! - 1
      }
    default:
      return state;
  }
};

export default reducer;
