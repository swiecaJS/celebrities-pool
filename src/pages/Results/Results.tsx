import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { resetGame } from 'store/game/actions';
import routes from 'constants/routes';

import BaseText from 'components/BaseText/BaseText';
import BaseButton from 'components/BaseButton/BaseButton';

import Winner from './Winner';
import TeamStandings from './TeamStandings';

import styles from './Results.module.scss';

const Results: React.FC = () => {
  const [canPlayAgain, setCanPlayAgain] = useState(false);
  const { t } = useTranslation('results');
  const history = useHistory();
  const dispatch = useDispatch();
  const dispatchResetGame = useCallback(() => dispatch(resetGame()), [
    dispatch,
  ]);

  const onResetGame = () => {
    dispatchResetGame();
    history.push(routes.settings);
  };

  useEffect(() => {
    const TWO_SECONDS = 2000;

    const timeout = setTimeout(() => {
      setCanPlayAgain(true);
    }, TWO_SECONDS);

    return () => clearTimeout(timeout);
  });

  return (
    <div data-cy="game-results" className={styles.wrapper}>
      <BaseText tag="h1" size={8} isBold className={styles.header}>
        {t('header')}
      </BaseText>
      <div>
        <Winner />
        <TeamStandings />
      </div>
      {canPlayAgain ? (
        <BaseButton
          className={styles.fade}
          type="button"
          onClick={onResetGame}
          cypressSelector="reset-game-btn"
        >
          {t('playAgain')}
        </BaseButton>
      // TO DO - fix this dirty hack 😅
      ) : <div style={{ height: '60px' }} /> }
    </div>
  );
};

export default Results;
