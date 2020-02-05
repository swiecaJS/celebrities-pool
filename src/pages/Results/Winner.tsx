import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getWinner } from 'store/game/selectors';

import BaseText from 'components/BaseText/BaseText';

import styles from './Results.module.scss';

const Winner: React.FC = () => {
  const winner = useSelector(getWinner);
  const isDraw = !winner;

  const { t } = useTranslation('results');
  return (
    <>
      <input type="hidden" data-cy="game-winner" value={winner} />

      {isDraw ? (
        <BaseText tag="p" size={8} className={styles.result} cypressSelector="result-draw">
          {t('draw')}
        </BaseText>
      ) : (
        <BaseText tag="p" size={7} className={styles.result} cypressSelector="result-winner">
          {t('result', { winner })}
        </BaseText>
      )}
    </>
  );
};

export default Winner;
