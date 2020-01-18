import { Action } from "redux";
import {ADD_CHARACTER} from './actionTypes'

export type Character = {
  description: string,
  addedByPlayerId: number
}

export interface CharactersState {
  characters: Character[]
}

export interface AddCharacterAction extends Action<typeof ADD_CHARACTER> {
  payload: {
    character: Character
  }
}

export type CharactersActionTypes = AddCharacterAction