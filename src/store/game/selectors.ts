import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

import { AppState } from '../types';
import { GameState, initialState } from './reducer';

export const getGameState = (state: AppState): GameState => state.game || initialState;

export const getTimeLeft = (state: AppState) => getGameState(state).timeLeft;
export const getCurrentTeam = (state: AppState) => getGameState(state).teamGuessing;
export const getAllLeftToGuess = (state: AppState) => getGameState(state).charactersLeftToGuess;
export const getNotGuessedInLastTurn = (state: AppState) => getGameState(state).notGuessedInThisTurn;
export const getRound = (state: AppState) => getGameState(state).round;
export const getIsRoundOpening = (state: AppState) => getGameState(state).isRoundOpening;
export const getCurrentCharacterToGuess = (state: AppState) => getGameState(state).currentCharacter;
export const getHasGameEnded = (state: AppState) => getGameState(state).hasGameEnded;

export const getTeamPoints = createSelector(getGameState, res => res.points);
export const getWinner = createSelector(getTeamPoints, (points) => {
  if (points.A > points.B) {
    return 'A';
  } if (points.A < points.B) {
    return 'B';
  }
  return undefined;
});


export const useGetTimeLeft = () => useSelector(getTimeLeft);
export const useGetTeamPoints = () => useSelector(getGameState).points;
export const useGetIsReady = () => useSelector(getGameState).isReady;
export const useGetRound = () => useSelector(getRound);
export const useGetCurrentTeam = () => useSelector(getCurrentTeam);
export const useGetCharacterToGuess = () => useSelector(getCurrentCharacterToGuess);
export const useGetHowManyLeftToGuess = () => useSelector(getAllLeftToGuess).length + (useSelector(getCurrentCharacterToGuess) ? 1 : 0);
export const useGetIsRoundOpening = () => useSelector(getIsRoundOpening);
export const useGetHasGameEnded = () => useSelector(getHasGameEnded);
