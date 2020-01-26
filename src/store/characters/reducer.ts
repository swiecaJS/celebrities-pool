import { AnyAction } from 'redux';

import { CharactersState, CharactersActionTypes } from './types';
import { ADD_CHARACTER } from './actionTypes';

export const initialState: CharactersState = {
  characters: [],
};

export const initialStateForTests: CharactersState = {
  characters: [
    {
      addedByPlayerId: 1,
      description: 'Batman',
    },
    {
      addedByPlayerId: 2,
      description: 'Pikachu',
    },
    {
      addedByPlayerId: 3,
      description: 'Robert Lewandowski',
    },
    {
      addedByPlayerId: 4,
      description: 'Maria Carey',
    },
  ],
};

export default (
  // state = initialStateForTests,
  state = initialState,
  incomingAction: AnyAction,
): CharactersState => {
  const action = incomingAction as CharactersActionTypes;

  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload.character],
      };
    default:
      return state;
  }
};
