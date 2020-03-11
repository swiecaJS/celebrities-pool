import { createSelector } from 'reselect';

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
export const getIsPlayerReady = (state: AppState) => getGameState(state).isReady;
export const getTeamPoints = (state: AppState) => getGameState(state).points;
export const getHowManyLeftToGuess = createSelector(
  getGameState,
  ({ charactersLeftToGuess, currentCharacter }) => charactersLeftToGuess.length + (currentCharacter ? 1 : 0),
);
export const getWinner = createSelector(getTeamPoints, (points) => {
  if (points.A > points.B) {
    return 'A';
  }
  if (points.A < points.B) {
    return 'B';
  }
  return undefined;
});
