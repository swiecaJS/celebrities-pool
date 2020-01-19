import { combineReducers } from "redux";

import settingsReducer from "store/settings/reducer";
import charactersReducer from 'store/characters/reducer'

const rootReducer = combineReducers({
  settings: settingsReducer,
  characters: charactersReducer,
});

export default rootReducer;
