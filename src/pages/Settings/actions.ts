import * as actionTypes from "./actionTypes";
import { SetCharactersPerPersonAction } from "./types";

export const setCharactersPerPerson = (
  charactersPerPerson: number
): SetCharactersPerPersonAction => ({
  type: actionTypes.SET_CHARACTERS_PER_PERSON,
  payload: {
    charactersPerPerson
  }
});
