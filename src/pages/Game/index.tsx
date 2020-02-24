import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetIsRoundOpening, useGetHasGameEnded } from 'store/game/selectors';

import routes from 'constants/routes';

import RoundOpening from './RoundOpening/RoundOpening';
import MainScreen from './MainScreen';

const Game: React.FC = () => {
  const isRoundOpening = useGetIsRoundOpening();
  const hasGameEnded = useGetHasGameEnded();
  const history = useHistory();

  useEffect(() => {
    if (hasGameEnded) history.push(routes.results);
  }, [hasGameEnded, history]);

  return isRoundOpening ? <RoundOpening /> : <MainScreen />;
};

export default Game;
