import React from 'react';

import { useGetCurrentTeam, useGetIsReady, useGetCharacterToGuess } from 'store/game/selectors';

import BaseText from 'components/BaseText/BaseText';

import styles from './Game.module.scss';

const CharacterToGuess: React.FC = () => {
  // const { t } = useTranslation('game');

  const isPlayerReady = useGetIsReady();
  const currentTeam = useGetCurrentTeam();
  const characterToGuess = useGetCharacterToGuess();

  return (
    <div className={styles.character}>
      <BaseText
        tag="p"
        size={!isPlayerReady ? 6 : 3}
        className={styles.characterHelp}
      >
        In this round, use as many words as you wish to describe a character
      </BaseText>

      {!isPlayerReady ? (
        <BaseText
          tag="p"
          isBold
          size={7}
          className={styles.characterHelp}
        >
          {/* {t('getReady',{currentTeam: 'A'})} */}
          {`TEAM ${currentTeam} GET READY`}
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
