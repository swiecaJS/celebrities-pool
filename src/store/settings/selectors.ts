import { useSelector } from "react-redux";

import { AppState } from "../types";
import { SettingsState } from "./types";
import { initialState } from "./reducer";

const getStateSubtree = (state: AppState): SettingsState =>
  state.settings || initialState;

export const getTotalNumberOfCharacters = (state: AppState): number => {
  const settings = getStateSubtree(state);

  return settings.charactersPerPerson * settings.numberOfPlayers;
};

export const useGetGameSettings = () => useSelector(getStateSubtree);

export const useGetTotalNumberOfCharacters = () =>
  useSelector(getTotalNumberOfCharacters);