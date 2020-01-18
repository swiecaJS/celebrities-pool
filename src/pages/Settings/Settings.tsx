import React from "react";
import { useTranslation } from "react-i18next";

import {
  CHARACTERS_PER_PERSON,
  NUMBER_OF_PLAYERS,
  SECONDS_FOR_CHARADES,
  SECONDS_FOR_ROUND
} from "./constants";
import * as settingsActions from "store/gameSettings/actions";
import routes from 'constants/routes'

import BaseText from "components/BaseText/BaseText";
import BaseLink from "components/BaseLink/BaseLink";
import SettingSlider from "./SettingSlider";

import styles from "./Settings.module.scss";

const Settings: React.FC = () => {
  const { t } = useTranslation("settings");

  return (
    <div>
      <BaseText tag="h1" size={6} isBold className={styles.header}>
        {t("header")}
      </BaseText>
      <SettingSlider
        config={NUMBER_OF_PLAYERS}
        setValueAction={settingsActions.setNumberOfPlayers}
        stateKey={"numberOfPlayers"}
      />
      <SettingSlider
        config={CHARACTERS_PER_PERSON}
        setValueAction={settingsActions.setCharactersPerPerson}
        stateKey={"charactersPerPerson"}
      />
      <SettingSlider
        config={SECONDS_FOR_ROUND}
        setValueAction={settingsActions.setSecondsForRound}
        stateKey={"secondsForRound"}
      />
      <SettingSlider
        config={SECONDS_FOR_CHARADES}
        setValueAction={settingsActions.setSecondsForCharades}
        stateKey={"secondsForCharades"}
      />
      <BaseLink type="primary" to={routes.game} className={styles.cta}>
        {t("cta")}
      </BaseLink>
    </div>
  );
};

export default Settings;
