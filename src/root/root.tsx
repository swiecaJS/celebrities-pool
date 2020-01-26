import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import routes from "constants/routes";
import store from 'store'

import Layout from "components/Layout/Layout";

import Start from "pages/Start/Start";
import GameRules from "pages/GameRules/GameRules";
import Settings from "pages/Settings/Settings";
import Characters from 'pages/Characters/Characters'
import Game from 'pages/Game/Game'
import Results from 'pages/Results/Results'

import 'config/translations/i18n'
import "./root.module.scss";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const root: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route path={routes.start} exact>
              <Start />
            </Route>
            <Route path={routes.rules}>
              <GameRules />
            </Route>
            <Route path={routes.settings}>
              <Settings />
            </Route>
            <Route path={routes.characters}>
              <Characters />
            </Route>
            <Route path={routes.game}>
              <Game />
            </Route>
            <Route path={routes.results}>
              <Results />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
};

root.propTypes = propTypes;
root.defaultProps = defaultProps;

export default root;
