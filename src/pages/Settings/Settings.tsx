import React from 'react';
import { useTranslation } from 'react-i18next';

import * as settingsActions from 'store/settings/actions';
import routes from 'constants/routes';

import BaseText from 'components/BaseText/BaseText';
import BaseLink from 'components/BaseLink/BaseLink';
import {
  CHARACTERS_PER_PERSON,
  NUMBER_OF_PLAYERS,
  SECONDS_FOR_CHARADES,
  SECONDS_FOR_ROUND,
} from './constants';
import SettingSlider from './SettingSlider';

import styles from './Settings.module.scss';

const Settings: React.FC = () => {
  const { t } = useTranslation('settings');

  return (
    <div className={styles.wrapper}>
      <BaseText tag="h1" size={8} isBold className={styles.header}>
        {t('header')}
      </BaseText>
      <div>
        <SettingSlider
          config={NUMBER_OF_PLAYERS}
          setValueAction={settingsActions.setNumberOfPlayers}
          stateKey="numberOfPlayers"
          cypressSelector="number-of-players-slider"
        />
        <SettingSlider
          config={CHARACTERS_PER_PERSON}
          setValueAction={settingsActions.setCharactersPerPerson}
          stateKey="charactersPerPerson"
          cypressSelector="character-per-person-slider"
        />
        <SettingSlider
          config={SECONDS_FOR_ROUND}
          setValueAction={settingsActions.setSecondsForRound}
          stateKey="secondsForRound"
          cypressSelector="seconds-for-round-slider"
        />
        {/* TO DO - handle in game */}
        {/* <SettingSlider
          config={SECONDS_FOR_CHARADES}
          setValueAction={settingsActions.setSecondsForCharades}
          stateKey="secondsForCharades"
          cypressSelector="seconds-for-charades-slider"
        /> */}

      </div>
      <BaseLink
        type="primary"
        to={routes.characters}
        className={styles.cta}
        cypressSelector="settings-finished-btn"
      >
        {t('cta')}
      </BaseLink>
    </div>
  );
};

export default Settings;
