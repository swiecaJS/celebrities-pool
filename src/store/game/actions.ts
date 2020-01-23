import {createAction} from '@reduxjs/toolkit'
import * as actionTypes from "./actionTypes";
import {
  AddPointsAction,
  CharacterGuessedAction,
  InitialSetupAction,
  Round,
  SetCharactersLeftToGuessAction,
  SetIsReadyAction,
  SetRoundAction,
  SetTeamGuessingAction,
  SetTimeLeftAction,
  TeamKey,
  SetCharacterToGuessAction,
  TickAction
} from "./types";

export const setRound = (payload: Round): SetRoundAction => ({
  type: actionTypes.SET_ROUND,
  payload
});

export const setCharacterLeftToGuess = (
  payload: string[]
): SetCharactersLeftToGuessAction => ({
  type: actionTypes.SET_CHARACTERS_LEFT_TO_GUESS,
  payload
});

export const setIsReady = (payload: boolean): SetIsReadyAction => ({
  type: actionTypes.SET_IS_READY,
  payload
});

export const setTeamGuessing = (payload: TeamKey): SetTeamGuessingAction => ({
  type: actionTypes.SET_TEAM_GUESSING,
  payload
});

export const addPoints = (payload: number): AddPointsAction => ({
  type: actionTypes.ADD_POINTS,
  payload
});

export const initialSetup = (): InitialSetupAction => ({
  type: actionTypes.INITIAL_SETUP
});

export const characterGuessed = (): CharacterGuessedAction => ({
  type: actionTypes.CHARACTER_GUESSED
});

export const tick = (): TickAction => ({
  type: actionTypes.TICK
});

export const setTimeLeft = (payload: number): SetTimeLeftAction => ({
  type: actionTypes.SET_TIME_LEFT,
  payload
});

export const setCharacterToGuess = (payload: string): SetCharacterToGuessAction => ({
  type: actionTypes.SET_CHARACTER_TO_GUESS,
  payload
});
