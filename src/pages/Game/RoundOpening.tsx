import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';


import { useGetRound } from 'store/game/selectors';
import { startRound } from 'store/game/actions';

import BaseText from 'components/BaseText/BaseText';
import BaseButton from 'components/BaseButton/BaseButton';

import styles from './Game.module.scss';

const RoundOpening: React.FC = () => {
  const { t } = useTranslation('roundOpening');
  const dispatch = useDispatch();
  const onRoundStart = useCallback(() => {
    dispatch(startRound());
  }, [dispatch]);
  const currentRound = useGetRound();

  return (
    <div data-cy="round-opening" className={styles.wrapper}>
      <BaseText tag="h1" size={8} isBold>
        {t('header', { currentRound })}
      </BaseText>
      <div className={styles.roundInfo}>
        <BaseText tag="h1" size={6}>
          {t(`rules-${currentRound}`)}
        </BaseText>
      </div>
      <BaseButton
        onClick={onRoundStart}
        type="button"
        cypressSelector="start-round-btn"
      >
        {t('cta')}
      </BaseButton>
    </div>
  );
};

export default RoundOpening;
