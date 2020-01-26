import React from 'react';
import { useTranslation } from "react-i18next";

import BaseText from 'components/BaseText/BaseText'

import styles from './Results.module.scss'

interface Props {};

const Results: React.FC<Props> = (props) => {
  const { t } = useTranslation("results");
  const winner = 'A';

return (
  <div data-cy="game-results">
      <BaseText tag="h1" size={8} isBold className={styles.header}>
        {t("header")}
      </BaseText>
      <BaseText tag="p" size={7}  className={styles.header} cypressSelector="winner">
        {t("result", {winner})}
      </BaseText>
      <BaseText tag="p" size={5}  className={styles.header}>
        {t("details")}
      </BaseText>
      <BaseText tag="p" size={5}  className={styles.header}>
        {t("points", {team: 'A', points: 10})}
      </BaseText>
      <BaseText tag="p" size={5}  className={styles.header}>
        {t("points", {team: 'B', points: 9})}
      </BaseText>
      

  </div>
)}

export default Results;