import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getCurrentTeam, getIsPlayerReady, getCurrentCharacterToGuess, getRound } from 'store/game/selectors';

import BaseText from 'components/BaseText/BaseText';

import styles from './MainScreen.module.scss';

const CharacterToGuess: React.FC = () => {
  const { t } = useTranslation(['game', 'roundOpening']);

  const isPlayerReady = useSelector(getIsPlayerReady);
  const currentTeam = useSelector(getCurrentTeam);
  const characterToGuess = useSelector(getCurrentCharacterToGuess);
  const round = useSelector(getRound);

  return (
    <div className={styles.character}>
      <BaseText
        tag="p"
        size={!isPlayerReady ? 6 : 3}
        className={styles.characterHelp}
      >
        {t(`roundOpening:rules-${round}`)}
      </BaseText>

      {!isPlayerReady ? (
        <BaseText
          tag="p"
          isBold
          size={7}
          className={styles.characterHelp}
        >
          {t('getReady', { currentTeam })}
        </BaseText>
      ) : (
        <div>
          <BaseText tag="h3" size={8} className={styles.characterText}>
            {characterToGuess}
          </BaseText>
        </div>
      )}
    </div>
  );
};

export default CharacterToGuess;
