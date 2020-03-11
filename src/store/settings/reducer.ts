import { createReducer } from '@reduxjs/toolkit';

import * as settingActions from './actions';

export interface SettingsState {
  numberOfPlayers: number;
  charactersPerPerson: number;
  secondsForRound: number;
}

export const initialState: SettingsState = {
  numberOfPlayers: 4,
  charactersPerPerson: 4,
  secondsForRound: 30,
};

// export default (
//   state = initialState,
//   incomingAction: AnyAction,
// ): SettingsState => {
//   const action = incomingAction as SettingsActionTypes;
//   switch (action.type) {
//     case SET_CHARACTERS_PER_PERSON: {
//       return {
//         ...state,
//         charactersPerPerson: action.payload.charactersPerPerson,
//       };
//     }
//     case SET_SECONDS_FOR_ROUND: {
//       return {
//         ...state,
//         secondsForRound: action.payload.secondsForRound,
//       };
//     }
//     case SET_NUMBER_OF_PLAYERS: {
//       return {
//         ...state,
//         numberOfPlayers: action.payload.numberOfPlayers,
//       };
//     }
//     default:
//       return state;
//   }
// };

const reducer = createReducer(initialState, builder => builder.addCase(
  settingActions.setCharactersPerPerson,
  (state, { payload }) => ({
    ...state,
    charactersPerPerson: payload,
  }),
)
  .addCase(settingActions.setNumberOfPlayers, (state, { payload }) => ({
    ...state,
    numberOfPlayers: payload,
  }))
  .addCase(settingActions.setSecondsForRound, (state, { payload }) => ({
    ...state,
    secondsForRound: payload,
  })));

export default reducer;
