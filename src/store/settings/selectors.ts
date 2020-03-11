import { AppState } from '../types';
import { initialState, SettingsState } from './reducer';

export const getSettingsState = (state: AppState): SettingsState => state.settings || initialState;

export const getTotalNumberOfCharacters = (state: AppState): number => {
  const settings = getSettingsState(state);

  return settings.charactersPerPerson * settings.numberOfPlayers;
};

export const getSecondsForRound = (state: AppState) => getSettingsState(state).secondsForRound;
