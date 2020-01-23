import { AppState } from "../types";
import { GameState, initialState } from "./reducer";

export const getStateSubtree = (state:AppState): GameState => state.game || initialState;

export const getTimeLeft = (state: AppState) => getStateSubtree(state).timeLeft;