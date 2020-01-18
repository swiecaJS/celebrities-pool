import { AnyAction } from "redux";

import { CharactersState, CharactersActionTypes } from "./types";
import { ADD_CHARACTER } from "./actionTypes";

export const initialState: CharactersState = {
  characters: []
};

export default (
  state = initialState,
  incomingAction: AnyAction
): CharactersState => {
  const action = incomingAction as CharactersActionTypes;

  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload.character]
      };
    default:
      return state;
  }
};
