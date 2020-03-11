import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


import { getRound, getCurrentTeam } from 'store/game/selectors';

import BaseText from 'components/BaseText/BaseText';

import styles from './MainScreen.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation('game');
  const team = useSelector(getCurrentTeam);
  const round = useSelector(getRound);

  return (
    <BaseText tag="h1" size={6} isBold className={styles.header}>
      {t(`ROUND ${round} - TEAM ${team}`)}
    </BaseText>
  );
};

export default Header;
