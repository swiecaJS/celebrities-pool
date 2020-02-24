import React from 'react';
import { useSelector } from 'react-redux';

import { getTimeLeft } from 'store/game/selectors';
import { getSecondsForRound } from 'store/settings/selectors';

import styles from './MainScreen.module.scss';

const ProgressBar: React.FC = () => {
  const timeLeft = useSelector(getTimeLeft);
  const initialTime = useSelector(getSecondsForRound);

  console.log('timeLeft', timeLeft, 'initialTime', initialTime);
  console.log();
  const width = (1 - (timeLeft! / initialTime)) * 100;
  return (
    <div className={styles.progressBar}>
      <span
        className={styles.progressBarMeter}
        style={{
          width: `${width}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
