import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares: any[] = [sagaMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
