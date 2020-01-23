import * as saga from "redux-saga/effects";
import { AnyAction } from "redux";

import { getStateSubtree as settingsSelector } from "store/settings/selectors";
import { SettingsState } from "store/settings/types";

import { getCharacters } from "store/characters/selectors";
import { Character } from "store/characters/types";

import * as gameActions from "./actions";
import { getTimeLeft } from "./selectors";
import { shuffleArray } from "./utils";

export function* initGame() {
  //change to preparer round
  const settings: SettingsState = yield saga.select(settingsSelector);
  yield saga.put(gameActions.setTimeLeft(settings.secondsForRound));

  const characters: Character[] = yield saga.select(getCharacters);
  const mappedCharacters = characters.map(({ description }) => description);

  yield saga.put(
    gameActions.setCharactersLeftToGuess(shuffleArray(mappedCharacters))
  );
  // const timer = yield saga.fork(tick)
  // console.log("init game!", settings, characters, timer);
}

export function* tick() {
  while (true) {
    yield saga.delay(1000);
    const timeLeft = yield saga.select(getTimeLeft);
    if (timeLeft === 0) {
      console.log("TIME ENDED");
    }
    yield saga.put(gameActions.setTimeLeft(timeLeft - 1));
  }
}

export function* handleGuess(
  action: ReturnType<typeof gameActions.playerGuessed>
) {
  const { isCorrect } = action.payload;

  if (isCorrect) {
    yield saga.put(gameActions.addPoints(1));
  }
}

export function* rootSaga() {
  console.log("saga", typeof gameActions.playerGuessed.type);
  yield saga.all([
    saga.takeEvery([gameActions.initialSetup.type], initGame),
    saga.takeEvery([gameActions.playerGuessed.type], handleGuess)
  ]);
}
