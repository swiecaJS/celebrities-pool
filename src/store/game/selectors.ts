import {useSelector} from 'react-redux'

import { AppState } from "../types";
import { GameState, initialState } from "./reducer";

export const getStateSubtree = (state:AppState): GameState => state.game || initialState;

export const getTimeLeft = (state: AppState) => getStateSubtree(state).timeLeft;
export const getCurrentTeam = (state: AppState) => getStateSubtree(state).teamGuessing
export const getAllLeftToGuess = (state: AppState) => getStateSubtree(state).charactersLeftToGuess
export const getRound = (state: AppState) => getStateSubtree(state).round

export const useGetTimeLeft = () => useSelector(getTimeLeft);
export const useGetTeamPoints = () => useSelector(getStateSubtree).points;
export const useGetIsReady = () => useSelector(getStateSubtree).isReady;
export const useGetRound = () => useSelector(getRound);
export const useGetCurrentTeam = () => useSelector(getCurrentTeam);
export const useGetCharacterToGuess = () => useSelector(getStateSubtree).currentCharacter;