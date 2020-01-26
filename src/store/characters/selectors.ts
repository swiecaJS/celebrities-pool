import { useSelector } from 'react-redux';

import { AppState } from '../types';
import { CharactersState, Character } from './types';
import { initialState } from './reducer';

const getStateSubtree = (state: AppState): CharactersState => state.characters || initialState;

export const getCharacters = (state: AppState): Character[] => getStateSubtree(state).characters;

export const useGetCharacters = () => useSelector(getCharacters);
