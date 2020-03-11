import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getTimeLeft,
  getTeamPoints,
  getHowManyLeftToGuess,
} from 'store/game/selectors';

import BaseText from 'components/BaseText/BaseText';

import styles from './MainScreen.module.scss';

const ScoreBoard: React.FC = () => {
  const { t } = useTranslation('game');

  const secondsLeft = useSelector(getTimeLeft);
  const points = useSelector(getTeamPoints);
  const howManyLeftToGuess = useSelector(getHowManyLeftToGuess);

  return (
    <>
      <div className={styles.scoreboard}>
        <div>
          <BaseText tag="p" size={6}>
            {t('TEAM A')} : <span>{points.A}</span>
          </BaseText>
        </div>
        <div>
          <BaseText tag="p" size={8} isBold>
            {secondsLeft}
          </BaseText>
        </div>
        <div>
          <BaseText tag="p" size={6}>
            {t('TEAM B')} : <span>{points.B}</span>
          </BaseText>
        </div>
      </div>
      <BaseText tag="p">{howManyLeftToGuess} characters left to guess</BaseText>
      <input
        type="hidden"
        data-cy="characters-left-to-guess"
        value={howManyLeftToGuess}
      />
    </>
  );
};

export default ScoreBoard;
