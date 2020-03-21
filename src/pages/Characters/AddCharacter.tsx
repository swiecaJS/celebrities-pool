import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { addCharacter } from 'store/characters/actions';
import { Character } from 'store/characters/types';
import { getSettingsState } from 'store/settings/selectors';
import useInput from 'utils/useTextInput';

import BaseText from 'components/BaseText/BaseText';
import BaseButton from 'components/BaseButton/BaseButton';

import styles from './AddCharacter.module.scss';

const AddCharacter: React.FC = () => {
  const [isReady, setReady] = useState(false);
  const [currentPlayerId, setPlayerId] = useState(1);
  const {
    value: characterName,
    bind: bindCharacterName,
    reset: resetCharacterName,
  } = useInput('');

  const { t } = useTranslation('addingCharacters');
  const dispatch = useDispatch();
  const onAddCharacter = useCallback(
    (character: Character) => dispatch(addCharacter(character)),
    [dispatch],
  );
  const settings = useSelector(getSettingsState);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onAddCharacter({
      addedByPlayerId: currentPlayerId,
      description: characterName,
    });
    setPlayerId(
      currentPlayerId % settings.numberOfPlayers === 0 ? 1 : currentPlayerId + 1,
    );
    resetCharacterName();
    setReady(false);
  };

  return isReady ? (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="character" className={styles.label}>
        <BaseText tag="p" size={6} isBold>
          {t('enterCharacter')}
        </BaseText>
        <input
          autoComplete="off"
          data-cy="enter-character"
          className={styles.input}
          type="text"
          name="character"
          id="character"
          placeholder={t('placeholder')}
          {...bindCharacterName}
        />
      </label>
      <BaseButton
        type="submit"
        cypressSelector="submit-character-btn"
        isDisabled={!characterName}

      >{t('submit')}
      </BaseButton>
    </form>
  ) : (
    <div className={styles.notReady}>
      <BaseText tag="p" size={6}>
        {t('playerInfo', { currentPlayerId })}
      </BaseText>
      <BaseText tag="p" size={6}>
        {t('isReady', { currentPlayerId })}
      </BaseText>
      <BaseButton
        type="submit"
        onClick={() => setReady(true)}
        cypressSelector="player-ready-btn"
      >
        {t('yes')}
      </BaseButton>
    </div>
  );
};

export default AddCharacter;
