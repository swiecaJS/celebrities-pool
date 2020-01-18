import { AnyAction } from "redux";

import { SettingsState, SettingsActionTypes } from "./types";
import { SET_CHARACTERS_PER_PERSON } from "./actionTypes";

export const initialState: SettingsState = {
  numberOfPlayers: 4,
  charactersPerPerson: 4,
  secondsForRound: 30,
  secondsForCharades: 45
};

export default (
  state = initialState,
  incomingAction: AnyAction
): SettingsState => {
  const action = incomingAction as SettingsActionTypes;
  switch (action.type) {
    case SET_CHARACTERS_PER_PERSON: {
      return {
        ...state,
        charactersPerPerson: action.payload.charactersPerPerson
      };
    }
    default:
      return state;
  }
};
