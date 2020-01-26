import { combineReducers } from 'redux';

import settingsReducer from 'store/settings/reducer';
import charactersReducer from 'store/characters/reducer';
import gameReducer from 'store/game/reducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  characters: charactersReducer,
  game: gameReducer,
});

export default rootReducer;
