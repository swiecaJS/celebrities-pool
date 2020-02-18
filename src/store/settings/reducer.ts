import { AnyAction } from 'redux';

import { SettingsState, SettingsActionTypes } from './types';
import { SET_CHARACTERS_PER_PERSON, SET_SECONDS_FOR_CHARADES, SET_SECONDS_FOR_ROUND, SET_NUMBER_OF_PLAYERS } from './actionTypes';

export const initialState: SettingsState = {
  numberOfPlayers: 4,
  charactersPerPerson: 4,
  secondsForRound: 30,
  secondsForCharades: 45,
};

export default (
  state = initialState,
  incomingAction: AnyAction,
): SettingsState => {
  const action = incomingAction as SettingsActionTypes;
  switch (action.type) {
    case SET_CHARACTERS_PER_PERSON: {
      return {
        ...state,
        charactersPerPerson: action.payload.charactersPerPerson,
      };
    }
    case SET_SECONDS_FOR_CHARADES: {
      return {
        ...state,
        secondsForCharades: action.payload.secondsForCharades,
      };
    }
    case SET_SECONDS_FOR_ROUND: {
      return {
        ...state,
        secondsForRound: action.payload.secondsForRound,
      };
    }
    case SET_NUMBER_OF_PLAYERS: {
      return {
        ...state,
        numberOfPlayers: action.payload.numberOfPlayers,
      };
    }
    default:
      return state;
  }
};
