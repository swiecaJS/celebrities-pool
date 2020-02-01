import { useSelector } from 'react-redux';

import { AppState } from '../types';
import { Character } from './types';
import { initialState, CharactersState } from './reducer';

const getCharactersState = (state: AppState): CharactersState => state.characters || initialState;

export const getCharacters = (state: AppState): Character[] => getCharactersState(state).characters;

export const useGetCharacters = () => useSelector(getCharacters);
