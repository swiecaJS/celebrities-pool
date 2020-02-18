import React from 'react';

import routes from 'constants/routes';

import BaseText from 'components/BaseText/BaseText';
import BaseLink from 'components/BaseLink/BaseLink';

import styles from './GameRules.module.scss';

const GameRules: React.FC = () => (
  <section className={styles.wrapper}>
    <BaseText tag="h1" size={8}>
        Do you know how to play?
    </BaseText>
    <div className={styles.buttons}>
      <BaseLink to={routes.settings} type="primary" cypressSelector="user-know-rules-btn">
        Yes
      </BaseLink>
      <BaseLink to="/manual/intro" type="secondary" cypressSelector="show-rules-button">
        No
      </BaseLink>
    </div>
  </section>
);

export default GameRules;
