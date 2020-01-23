import { Action } from "redux";
import * as actionTypes from "./actionTypes";

export type TeamKey = 'A' | 'B'
export type Round = 1 | 2 | 3;

export interface AddPointsAction extends Action<typeof actionTypes.ADD_POINTS> {
  payload: number
}
export interface SetIsReadyAction extends Action<typeof actionTypes.SET_IS_READY> {
  payload: boolean
}
export interface SetTeamGuessingAction extends Action<typeof actionTypes.SET_TEAM_GUESSING> {
  payload: TeamKey
}
export interface SetRoundAction extends Action<typeof actionTypes.SET_ROUND> {
  payload: Round
}
export interface SetCharactersLeftToGuessAction extends Action<typeof actionTypes.SET_CHARACTERS_LEFT_TO_GUESS> {
  payload: string[]
}
export interface SetCharacterToGuessAction extends Action<typeof actionTypes.SET_CHARACTER_TO_GUESS> {
  payload: string
}
export interface SetTimeLeftAction extends Action<typeof actionTypes.SET_TIME_LEFT> {
  payload: number
}

export type InitialSetupAction = Action<typeof actionTypes.INITIAL_SETUP>
export type CharacterGuessedAction = Action<typeof actionTypes.CHARACTER_GUESSED>
export type TickAction = Action<typeof actionTypes.TICK>

export type GameActionTypes =
  | SetTimeLeftAction
  | InitialSetupAction
  | CharacterGuessedAction
  | TickAction
  | AddPointsAction
  | SetTeamGuessingAction
  | SetRoundAction
  | SetCharactersLeftToGuessAction
  | SetCharacterToGuessAction
  | SetIsReadyAction;
