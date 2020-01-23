import {createAction} from '@reduxjs/toolkit'
import * as actionTypes from "./actionTypes";
import { TeamKey, Round } from "./types";

export const initialSetup = createAction('game/INITIAL_SETUP')

export const addPoints = createAction<number, typeof actionTypes.ADD_POINTS>(
  actionTypes.ADD_POINTS
);

export const setIsReady = createAction<boolean, typeof actionTypes.SET_IS_READY>(
  actionTypes.SET_IS_READY
);

export const setRound = createAction<Round, typeof actionTypes.SET_ROUND>(
  actionTypes.SET_ROUND
);

export const setTeamGuessing = createAction<
  TeamKey,
  typeof actionTypes.SET_TEAM_GUESSING
>(actionTypes.SET_TEAM_GUESSING);

export const setTimeLeft = createAction<number, typeof actionTypes.SET_TIME_LEFT>(
  actionTypes.SET_TIME_LEFT
);

export const setCharactersLeftToGuess = createAction<
  string[],
  typeof actionTypes.SET_CHARACTERS_LEFT_TO_GUESS
>(actionTypes.SET_CHARACTERS_LEFT_TO_GUESS);
