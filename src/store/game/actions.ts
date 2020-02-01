import { createAction } from '@reduxjs/toolkit';
import { TeamKey, Round, PlayerGuess } from './types';

export const startRound = createAction('game/START_ROUND');
export const startTurn = createAction('game/START_TURN');
export const timeEnded = createAction('game/TIME_ENDED');
export const resetGame = createAction('game/RESET');
export const outOfCharacters = createAction('game/OUT_OF_CHARACTERS');
export const setGameEnded = createAction<boolean, 'game/SET_GAME_ENDED'>('game/SET_GAME_ENDED');

export const addPoints = createAction<number, 'game/ADD_POINTS'>(
  'game/ADD_POINTS',
);

export const setIsReady = createAction<boolean, 'game/SET_IS_READY'>(
  'game/SET_IS_READY',
);

export const setIsRoundOpening = createAction<boolean, 'game/SET_IS_ROUND_OPENING'>(
  'game/SET_IS_ROUND_OPENING',
);

export const setRound = createAction<Round, 'game/SET_ROUND'>(
  'game/SET_ROUND',
);

export const setCurrentCharacter = createAction<string | null, 'game/SET_CURRENT_CHARACTER'>('game/SET_CURRENT_CHARACTER');

export const setTeamGuessing = createAction<
TeamKey,
'game/SET_TEAM_GUESSING'
>('game/SET_TEAM_GUESSING');

export const setTimeLeft = createAction<number, 'timer/SET_TIME_LEFT'>(
  'timer/SET_TIME_LEFT',
);

export const setCharactersLeftToGuess = createAction<
string[],
'game/SET_CHARACTERS_LEFT_TO_GUESS'
>('game/SET_CHARACTERS_LEFT_TO_GUESS');

export const setCharactersNotGuessed = createAction<
string[],
'game/SET_CHARACTERS_NOT_GUESSED'
>('game/SET_CHARACTERS_NOT_GUESSED');


export const playerGuessed = createAction<PlayerGuess, 'game/PLAYER_GUESSED'>('game/PLAYER_GUESSED');
