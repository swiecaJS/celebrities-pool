import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AppState } from 'store/types';
import { SettingsActionTypes } from 'store/settings/types';

import BaseSlider from 'components/BaseSlider/BaseSlider';
import { SettingSliderConfig } from './types';

import styles from './SettingsSlider.module.scss';

interface Props {
  setValueAction: (value: any) => SettingsActionTypes;
  stateKey:
  | 'numberOfPlayers'
  | 'charactersPerPerson'
  | 'secondsForRound'
  | 'secondsForCharades';
  config: SettingSliderConfig;
  cypressSelector: string;
}

const NumberOfPlayers: React.FC<Props> = ({
  setValueAction,
  stateKey,
  config,
  cypressSelector,
}) => {
  const { t } = useTranslation('settings');
  const dispatch = useDispatch();
  const onHandleChange = useCallback(
    (newValue: number) => dispatch(setValueAction(newValue)),
    [dispatch, setValueAction],
  );
  const sliderValue = useSelector(
    (state: AppState) => state.settings[stateKey],
  );
  return (
    <BaseSlider
      wrapperClassName={styles.wrapper}
      min={config.MIN}
      max={config.MAX}
      step={config.STEP}
      value={sliderValue}
      label={t(stateKey)}
      handleChange={onHandleChange}
      cypressSelector={cypressSelector}
    />
  );
};

export default NumberOfPlayers;
