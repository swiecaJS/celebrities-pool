import {createAction} from '@reduxjs/toolkit'
import { TeamKey, Round, PlayerGuess } from "./types";

export const initialSetup = createAction('game/INITIAL_SETUP')

export const addPoints = createAction<number, 'game/ADD_POINTS'>(
  'game/ADD_POINTS'
);

export const setIsReady = createAction<boolean, 'game/SET_IS_READY'>(
  'game/SET_IS_READY'
);

export const setRound = createAction<Round,'game/SET_ROUND'>(
  'game/SET_ROUND'
);

export const setCurrentCharacter = createAction<string, 'game/SET_CURRENT_CHARACTER'>('game/SET_CURRENT_CHARACTER')

export const setTeamGuessing = createAction<
  TeamKey,
  'game/SET_TEAM_GUESSING'
>('game/SET_TEAM_GUESSING');

export const setTimeLeft = createAction<number,'game/SET_TIME_LEFT'>(
'game/SET_TIME_LEFT'
);

export const setCharactersLeftToGuess = createAction<
  string[],
  'game/SET_CHARACTERS_LEFT_TO_GUESS'
>('game/SET_CHARACTERS_LEFT_TO_GUESS');


export const playerGuessed = createAction<PlayerGuess, 'game/PLAYER_GUESSED'>('game/PLAYER_GUESSED')
