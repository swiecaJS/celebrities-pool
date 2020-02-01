import { createAction } from '@reduxjs/toolkit';
import { Character } from './types';

export const addCharacter = createAction<Character, 'characters/ADD'>('characters/ADD');
