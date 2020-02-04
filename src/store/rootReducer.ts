import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingsReducer from 'store/settings/reducer';
import charactersReducer from 'store/characters/reducer';
import gameReducer from 'store/game/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings', 'characters', 'game'],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  characters: charactersReducer,
  game: gameReducer,
});

export default persistReducer(persistConfig, rootReducer);
