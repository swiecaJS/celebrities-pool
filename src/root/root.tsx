import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';

import AppRoutes from './AppRoutes';

import 'config/translations/i18n';
import './root.module.scss';

const Root: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <AppRoutes />
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
