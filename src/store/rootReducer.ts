import { combineReducers } from "redux";

import settingsReducer from "store/gameSettings/reducer";

const rootReducer = combineReducers({
  settings: settingsReducer
});

export default rootReducer;
