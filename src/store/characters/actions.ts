import { ADD_CHARACTER } from './actionTypes';
import { AddCharacterAction, Character } from './types';

export const addCharacter = (character: Character): AddCharacterAction => ({
  type: ADD_CHARACTER,
  payload: {
    character,
  },
});
