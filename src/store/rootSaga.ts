import { all } from 'redux-saga/effects';

import { rootSaga as gameSaga } from 'store/game/sagas';

export default function* rootSaga() {
  yield all([
    gameSaga(),
  ]);
}
