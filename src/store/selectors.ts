import { useSelector } from 'react-redux';

import { AppState } from './types';
import { GameState } from './game/reducer';
import { SettingsState } from './settings/types';

export const getIsRoundOpening = (state: AppState) => {
  const settings = state.settings as SettingsState;
  const gameState = state.game as GameState;

  return (
    settings.charactersPerPerson * settings.numberOfPlayers ===
    gameState.charactersLeftToGuess.length
  );
};

export const useGetIsRoundOpening = () => useSelector(getIsRoundOpening);
