import * as actionTypes from './actionTypes';
import {
  SetCharactersPerPersonAction,
  SetNumberOfPlayersAction,
  SetSecondsForRoundAction,
  SetSecondsForCharadesAction,
} from './types';

export const setCharactersPerPerson = (
  charactersPerPerson: number,
): SetCharactersPerPersonAction => ({
  type: actionTypes.SET_CHARACTERS_PER_PERSON,
  payload: {
    charactersPerPerson,
  },
});

export const setNumberOfPlayers = (
  numberOfPlayers: number,
): SetNumberOfPlayersAction => ({
  type: actionTypes.SET_NUMBER_OF_PLAYERS,
  payload: {
    numberOfPlayers,
  },
});
export const setSecondsForRound = (
  secondsForRound: number,
): SetSecondsForRoundAction => ({
  type: actionTypes.SET_SECONDS_FOR_ROUND,
  payload: {
    secondsForRound,
  },
});
export const setSecondsForCharades = (
  secondsForCharades: number,
): SetSecondsForCharadesAction => ({
  type: actionTypes.SET_SECONDS_FOR_CHARADES,
  payload: {
    secondsForCharades,
  },
});
