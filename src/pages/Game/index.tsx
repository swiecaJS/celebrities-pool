import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getHasGameEnded, getIsRoundOpening } from 'store/game/selectors';

import routes from 'constants/routes';

import RoundOpening from './RoundOpening/RoundOpening';
import MainScreen from './MainScreen';

const Game: React.FC = () => {
  const isRoundOpening = useSelector(getIsRoundOpening);
  const hasGameEnded = useSelector(getHasGameEnded);
  const history = useHistory();

  useEffect(() => {
    if (hasGameEnded) history.push(routes.results);
  }, [hasGameEnded, history]);

  return isRoundOpening ? <RoundOpening /> : <MainScreen />;
};

export default Game;
