import { Action } from 'redux';
import {
  SET_NUMBER_OF_PLAYERS,
  SET_CHARACTERS_PER_PERSON,
  SET_SECONDS_FOR_ROUND,
  SET_SECONDS_FOR_CHARADES,
} from './actionTypes';

export interface SettingsState {
  numberOfPlayers: number;
  charactersPerPerson: number;
  secondsForRound: number;
  secondsForCharades: number;
}

export interface SetNumberOfPlayersAction
  extends Action<typeof SET_NUMBER_OF_PLAYERS> {
  payload: {
    numberOfPlayers: number;
  };
}
export interface SetCharactersPerPersonAction
  extends Action<typeof SET_CHARACTERS_PER_PERSON> {
  payload: {
    charactersPerPerson: number;
  };
}
export interface SetSecondsForRoundAction
  extends Action<typeof SET_SECONDS_FOR_ROUND> {
  payload: {
    secondsForRound: number;
  };
}
export interface SetSecondsForCharadesAction
  extends Action<typeof SET_SECONDS_FOR_CHARADES> {
  payload: {
    secondsForCharades: number;
  };
}

export type SettingsActionTypes = SetNumberOfPlayersAction | SetCharactersPerPersonAction | SetSecondsForRoundAction | SetSecondsForCharadesAction
