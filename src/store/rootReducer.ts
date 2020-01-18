import { combineReducers } from "redux";

import settingsReducer from "pages/Settings/reducer";

const rootReducer = combineReducers({
  settings: settingsReducer
});

export default rootReducer;
