import {useSelector} from 'react-redux'

import { AppState } from "../types";
import { GameState, initialState } from "./reducer";

export const getStateSubtree = (state:AppState): GameState => state.game || initialState;

export const getTimeLeft = (state: AppState) => getStateSubtree(state).timeLeft;
export const getCurrentTeam = (state: AppState) => getStateSubtree(state).teamGuessing
export const getAllLeftToGuess = (state: AppState) => getStateSubtree(state).charactersLeftToGuess
export const getNotGuessedInLastTurn = (state: AppState) => getStateSubtree(state).notGuessedInThisTurn
export const getRound = (state: AppState) => getStateSubtree(state).round
export const getIsRoundOpening = (state: AppState) => getStateSubtree(state).isRoundOpening
export const getCurrentCharacterToGuess = (state: AppState) => getStateSubtree(state).currentCharacter
export const getHasGameEnded = (state: AppState) => getStateSubtree(state).hasGameEnded

export const useGetTimeLeft = () => useSelector(getTimeLeft);
export const useGetTeamPoints = () => useSelector(getStateSubtree).points;
export const useGetIsReady = () => useSelector(getStateSubtree).isReady;
export const useGetRound = () => useSelector(getRound);
export const useGetCurrentTeam = () => useSelector(getCurrentTeam);
export const useGetCharacterToGuess = () => useSelector(getCurrentCharacterToGuess);
export const useGetHowManyLeftToGuess = () => useSelector(getAllLeftToGuess).length + (useSelector(getCurrentCharacterToGuess) ? 1 : 0);
export const useGetIsRoundOpening = () => useSelector(getIsRoundOpening);
export const useGetHasGameEnded = () => useSelector(getHasGameEnded);