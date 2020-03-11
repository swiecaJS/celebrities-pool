import { createAction } from '@reduxjs/toolkit';

export const setCharactersPerPerson = createAction<number, 'game/SET_CHARACTERS_PER_PERSON'>('game/SET_CHARACTERS_PER_PERSON');
export const setNumberOfPlayers = createAction<number, 'game/SET_NUMBER_OF_PLAYERS'>('game/SET_NUMBER_OF_PLAYERS');
export const setSecondsForRound = createAction<number, 'game/SET_SECONDS_FOR_ROUND'>('game/SET_SECONDS_FOR_ROUND');
