import React from 'react';
import { useTranslation } from 'react-i18next';

import routes from 'constants/routes';

import BaseText from 'components/BaseText/BaseText';
import BaseLink from 'components/BaseLink/BaseLink';

import styles from './Start.module.scss';


const Start: React.FC = () => {
  const { t } = useTranslation('start');
  return (
    <section className={styles.wrapper}>
      <BaseText tag="h1" size={9} isBold>
        {t('title')}
      </BaseText>
      <BaseLink to={routes.rules} type="primary" cypressSelector="start-game-btn">
        {t('cta')}
      </BaseLink>
    </section>
  );
};

export default Start;
