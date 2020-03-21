import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


import { getRound } from 'store/game/selectors';
import { startRound } from 'store/game/actions';

import BaseText from 'components/BaseText/BaseText';
import BaseButton from 'components/BaseButton/BaseButton';

import PigeonFeeder from './PigeonFeeder/PigeonFeeder';
import Heart from './PigeonFeeder/Heart';
import { pigeonContext } from './PigeonFeeder/PigeonContext';
import { usePigeon } from './PigeonFeeder/usePigeon';

import styles from './RoundOpening.module.scss';

const RoundOpening: React.FC = () => {
  const { t } = useTranslation('roundOpening');
  const dispatch = useDispatch();
  const onRoundStart = useCallback(() => {
    dispatch(startRound());
  }, [dispatch]);
  const currentRound = useSelector(getRound);

  const pigeon = usePigeon();

  return (
    <pigeonContext.Provider value={pigeon}>

      <div data-cy="round-opening" className={styles.wrapper}>
        <BaseText tag="h1" size={8} isBold>
          {t('header', { currentRound })}
        </BaseText>
        {pigeon.isPigeonFed ? (
          <BaseButton
            onClick={onRoundStart}
            type="button"
            cypressSelector="start-round-btn"
          >
            {t('cta')}
          </BaseButton>
        ) : (
          <BaseText tag="h1" size={8} isBold>Feed pigeon to continue</BaseText>
        )}

        <PigeonFeeder />
        <Heart />
      </div>
    </pigeonContext.Provider>
  );
};

export default RoundOpening;
