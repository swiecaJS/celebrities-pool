import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getTeamPoints } from 'store/game/selectors';

import BaseText from 'components/BaseText/BaseText';

import styles from './Results.module.scss';

const TeamStandings: React.FC = () => {
  const { t } = useTranslation('results');
  const teamPoints = useSelector(getTeamPoints);

  return (
    <div className={styles.table}>
      <BaseText tag="p" size={7} className={styles.tableHeader}>
        {t('details')}
      </BaseText>
      <BaseText tag="p" size={6} className={styles.tableResult}>
        {t('points', { team: 'A', points: teamPoints.A })}
      </BaseText>
      <BaseText tag="p" size={6} className={styles.tableResult}>
        {t('points', { team: 'B', points: teamPoints.B })}
      </BaseText>
    </div>
  );
};

export default TeamStandings;
