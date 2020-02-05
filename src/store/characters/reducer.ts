import { createReducer } from '@reduxjs/toolkit';

import { resetGame } from 'store/game/actions';
import { Character } from './types';
import { addCharacter } from './actions';

export interface CharactersState {
  characters: Character[];
}

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

const reducer = createReducer(initialState, builder => builder
  .addCase(addCharacter, (state, { payload }) => ({
    ...state,
    characters: [...state.characters, payload],
  }))
  .addCase(resetGame, () => ({ ...initialState })));

export default reducer;
