import React from "react";

import routes from 'constants/routes'

import BaseText from "components/BaseText/BaseText";
import BaseLink from "components/BaseLink/BaseLink";

import styles from "./Start.module.scss";


const Start: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <BaseText tag="h1" size={9} isBold>
        Sack of Celebrities
        <span role="img" aria-label="money sack">
          💰
        </span>
      </BaseText>
      <BaseLink to={routes.rules} type="primary">
        Start
      </BaseLink>
    </section>
  );
};

export default Start;
