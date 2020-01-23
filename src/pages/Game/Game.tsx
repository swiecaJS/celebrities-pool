import React from "react";
import {useDispatch} from 'react-redux'
import { useTranslation } from "react-i18next";

import {initialSetup} from 'store/game/actions'

import BaseText from "components/BaseText/BaseText";
import ScoreBoard from './ScoreBoard'
import Controls from './Controls'

import styles from "./Game.module.scss";

const Start: React.FC = () => {
  const { t } = useTranslation("game");
  const dispatch = useDispatch();
  const onInitalSetup = React.useCallback(() => {
    dispatch(initialSetup());
  }, [dispatch])

  React.useEffect(() => {
    onInitalSetup()
  }, [onInitalSetup])

  return (
    <section className={styles.wrapper}>
      <div>
        <BaseText tag="h1" size={6} isBold className={styles.header}>
          {t("ROUND 1 - TEAM A")}
        </BaseText>
        <ScoreBoard />
        <div className={styles.progressBar}>
          <span className={styles.progressBarMeter}></span>
        </div>
      </div>
      <div className={styles.character}>
        <BaseText tag="p" size={3} className={styles.characterHelp}>
          In this round, use as many words as you wish to describe a character
          😎
        </BaseText>
        <div>
          <BaseText tag="h3" size={8} className={styles.characterText}>
            Batman
          </BaseText>
        </div>
      </div>
      <Controls />
    </section>
  );
};

export default Start;
