import * as saga from "redux-saga/effects";
import { AnyAction } from "redux";

import { getStateSubtree as settingsSelector } from "store/settings/selectors";
import { SettingsState } from "store/settings/types";

import { getCharacters } from "store/characters/selectors";
import { Character } from "store/characters/types";

import * as gameActions from "./actions";
import { getTimeLeft, getCurrentTeam, getAllLeftToGuess, getRound } from "./selectors";
import { shuffleArray, getOtherTeamKey } from "./utils";
import {TeamKey, Round} from './types'

export function* initRound() {
  //change to preparer round
  const settings: SettingsState = yield saga.select(settingsSelector);
  yield saga.put(gameActions.setTimeLeft(settings.secondsForRound));

  const characters: Character[] = yield saga.select(getCharacters);
  const mappedCharacters = characters.map(({ description }) => description);

  yield saga.put(
    gameActions.setCharactersLeftToGuess(shuffleArray(mappedCharacters))
  );
}

export function* nextRound() {
  const currentRound: Round = yield saga.select(getRound);

  switch(currentRound) {
    case 1:
    case 2:
      yield saga.put(gameActions.setRound(currentRound + 1 as Round))
      break;
    case 3:
      // TODO - handle end game
      return null;
  }
}

export function* tickTock() {
  while (true) {
    yield saga.delay(1000);
    const timeLeft = yield saga.select(getTimeLeft);
    if (timeLeft === 0) {
      yield saga.put(gameActions.timeEnded());
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

  const leftToGuess: string[] = yield saga.select(getAllLeftToGuess);

  if (leftToGuess.length >= 1) {
    yield saga.call(setNewCharacterToGuess, true)
  } else {
    yield saga.call(nextRound);
  }

  // check how many characters left 
}

export function* handleTurn() {
    yield saga.put(gameActions.setIsReady(true));
    const timer = yield saga.fork(tickTock)
    yield saga.call(setNewCharacterToGuess, false)
    // TODO: handle all characters guessed
    yield saga.take([gameActions.timeEnded.type])
    yield saga.cancel(timer);
    yield saga.call(prepareNextTurn);
}

export function* prepareNextTurn() {
  const settings: SettingsState = yield saga.select(settingsSelector);
  const previousGuessingTeam:TeamKey = yield saga.select(getCurrentTeam);

  yield saga.put(gameActions.setTimeLeft(settings.secondsForRound));
  yield saga.put(gameActions.setTeamGuessing(getOtherTeamKey(previousGuessingTeam)))
  yield saga.put(gameActions.setIsReady(false));
}

export function* setNewCharacterToGuess(withRemoval = true) {
  const leftToGuess: string[] = yield saga.select(getAllLeftToGuess);
  const nextGuess = leftToGuess[0];
  yield saga.put(gameActions.setCurrentCharacter(nextGuess));
  yield saga.put(gameActions.setCharactersLeftToGuess(shuffleArray(withRemoval ? leftToGuess.slice(1) : [...leftToGuess])))
}

export function* rootSaga() {
  console.log("saga", typeof gameActions.playerGuessed.type);
  yield saga.all([
    saga.takeEvery([gameActions.initialSetup.type], initRound),
    saga.takeEvery([gameActions.playerGuessed.type], handleGuess),
    saga.takeEvery([gameActions.startTurn.type], handleTurn),
  ]);
}
