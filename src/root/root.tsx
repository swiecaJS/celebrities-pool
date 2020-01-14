import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from 'components/Layout/Layout'

import Start from 'pages/Start/Start'
import GameRules from 'pages/GameRules/GameRules'

import "./root.module.scss";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const root: React.FC<Props> = () => {
  return (
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact>
              <Start />
            </Route>
            <Route path="/rules">
              <GameRules />
            </Route>
          </Layout>
        </Switch>
      </Router>
  );
};

root.propTypes = propTypes;
root.defaultProps = defaultProps;

export default root;
