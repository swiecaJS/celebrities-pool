import React, { useCallback } from 'react';
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
  const { t } = useTranslation('results');
  const history = useHistory();
  const dispatch = useDispatch();
  const dispatchResetGame = useCallback(() => dispatch(resetGame()),
    [dispatch]);

  const onResetGame = () => {
    dispatchResetGame();
    history.push(routes.settings);
  };

  return (
    <div data-cy="game-results">
      <BaseText tag="h1" size={8} isBold className={styles.header}>
        {t('header')}
      </BaseText>
      <Winner />
      <TeamStandings />
      <BaseButton type="button" onClick={onResetGame} cypressSelector="reset-game-btn">
        {t('playAgain')}
      </BaseButton>

    </div>
  );
};

export default Results;
