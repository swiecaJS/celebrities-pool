import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'constants/routes';

import Layout from 'components/Layout/Layout';

import Start from 'pages/Start/Start';
import GameRules from 'pages/GameRules/GameRules';
import Manual from 'pages/GameRules/Manual/Manual';
import Settings from 'pages/Settings/Settings';
import Characters from 'pages/Characters/Characters';
import Game from 'pages/Game';
import Results from 'pages/Results/Results';


const AppRoutes: React.FC = () => (
  <Switch>
    <Layout>
      <Route path={routes.start} exact>
        <Start />
      </Route>
      <Route path={routes.rules}>
        <GameRules />
      </Route>
      <Route path={routes.manual}>
        <Manual />
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
);

export default AppRoutes;
