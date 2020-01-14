import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from 'pages/Start/Start'
import GameRules from 'pages/GameRules/GameRules'

import styles from "./root.module.scss";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const root: React.FC<Props> = () => {
  return (
    <main className={styles.page}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/rules">
            <GameRules />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

root.propTypes = propTypes;
root.defaultProps = defaultProps;

export default root;
