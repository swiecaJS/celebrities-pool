import * as saga from "redux-saga/effects";

import { getStateSubtree as settingsSelector } from "store/settings/selectors";
import { SettingsState } from "store/settings/types";

import { getCharacters } from "store/characters/selectors";
import { Character } from "store/characters/types";

import * as gameActions from "./actions";
import {
  getTimeLeft,
  getCurrentTeam,
  getAllLeftToGuess,
  getRound,
  getNotGuessedInLastTurn,
  getCurrentCharacterToGuess
} from "./selectors";
import { shuffleArray, getOtherTeamKey } from "./utils";
import { TeamKey, Round } from "./types";

export function* prepareRound() {
  const settings: SettingsState = yield saga.select(settingsSelector);
  yield saga.put(gameActions.setTimeLeft(settings.secondsForRound));

  const characters: Character[] = yield saga.select(getCharacters);
  const mappedCharacters = characters.map(({ description }) => description);

  yield saga.put(
    gameActions.setCharactersLeftToGuess(shuffleArray(mappedCharacters))
  );

  yield saga.put(gameActions.setIsRoundOpening(false));
}

export function* nextRound() {
  const currentRound: Round = yield saga.select(getRound);

  switch (currentRound) {
    case 1:
    case 2:
      yield saga.put(gameActions.setRound((currentRound + 1) as Round));
      yield saga.put(gameActions.setIsRoundOpening(true));
      yield saga.call(prepareRound);
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
  console.log('handle guess', action.payload)
  const { isCorrect, character } = action.payload;

  if (isCorrect) {
    console.log('-----  adding point')
    yield saga.put(gameActions.addPoints(1));
  } else {
    console.log('-----  adds to not guessed array')
    const notGuessed: string[] = yield saga.select(getNotGuessedInLastTurn);
    yield saga.put(gameActions.setCharactersNotGuessed([...notGuessed, character]));
    // add to the notGuessed array, and merge it in next turn
  }

  // remove from possible guesses
  const charactersInGame: string[] = yield saga.select(getAllLeftToGuess);
  const leftToGuess = charactersInGame.filter(c => c !== character);

  console.log('----- left to guess', leftToGuess)

  if (leftToGuess.length === 0) {
    console.log('----- calling next round')
    yield saga.put(gameActions.outOfCharacters())
    yield saga.call(nextRound);
    return;
  }

  console.log('---- we still can guess')

  // set new character
  const nextGuess = leftToGuess[0];
  console.log('---- our new character to guess', nextGuess)
  yield saga.put(gameActions.setCurrentCharacter(nextGuess));
  // remove this character from the list
  console.log('---- setting left to guess to', leftToGuess.slice(1))
  yield saga.put(gameActions.setCharactersLeftToGuess(leftToGuess.slice(1)));
}

export function* startTurn() {
  yield saga.put(gameActions.setIsReady(true));
  const timer = yield saga.fork(tickTock);
  // get first character to guess
  const leftToGuess: string[] = yield saga.select(getAllLeftToGuess);
  const nextGuess = leftToGuess[0];
  yield saga.put(gameActions.setCurrentCharacter(nextGuess));
  // remove this character from the list
  yield saga.put(gameActions.setCharactersLeftToGuess(leftToGuess.slice(1)));

  // TODO: handle all characters guessed
  yield saga.take([gameActions.timeEnded.type, gameActions.outOfCharacters.type]);
  yield saga.cancel(timer);
  yield saga.call(prepareNextTurn);
}

export function* prepareNextTurn() {
  const settings: SettingsState = yield saga.select(settingsSelector);
  const previousGuessingTeam: TeamKey = yield saga.select(getCurrentTeam);

  const leftToGuess: string[] = yield saga.select(getAllLeftToGuess);
  const notGuessed: string[] = yield saga.select(getNotGuessedInLastTurn);
  const lastCharacterDisplayed = yield saga.select(getCurrentCharacterToGuess)
  const shuffled: string[] = shuffleArray([...leftToGuess, ...notGuessed, lastCharacterDisplayed]);
  yield saga.put(gameActions.setCharactersLeftToGuess(shuffled));

  yield saga.put(gameActions.setCharactersNotGuessed([]));
  yield saga.put(gameActions.setCurrentCharacter(null));

  yield saga.put(gameActions.setTimeLeft(settings.secondsForRound));
  yield saga.put(
    gameActions.setTeamGuessing(getOtherTeamKey(previousGuessingTeam))
  );
  yield saga.put(gameActions.setIsReady(false));
}

export function* rootSaga() {
  console.log("saga", typeof gameActions.playerGuessed.type);
  yield saga.all([
    saga.takeEvery([gameActions.startRound.type], prepareRound),
    saga.takeEvery([gameActions.playerGuessed.type], handleGuess),
    saga.takeEvery([gameActions.startTurn.type], startTurn)
  ]);
}
