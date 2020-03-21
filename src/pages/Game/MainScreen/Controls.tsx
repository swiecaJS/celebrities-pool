import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { playerGuessed, startTurn } from 'store/game/actions';
import { PlayerGuess } from 'store/game/types';
import { getIsPlayerReady, getCurrentCharacterToGuess, getIsFirstRound } from 'store/game/selectors';


import BaseButton from 'components/BaseButton/BaseButton';

import ControlButton from './ControlButton';

import styles from './MainScreen.module.scss';

const Controls: React.FC = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();
  const character = useSelector(getCurrentCharacterToGuess);
  const isPlayerReady = useSelector(getIsPlayerReady);
  const onGuess = useCallback((guess: PlayerGuess) => dispatch(playerGuessed(guess)), [dispatch]);
  const onStartTurn = useCallback(() => dispatch(startTurn()), [dispatch]);
  const isFirstRound = useSelector(getIsFirstRound);

  return (
    <div className={styles.controls}>
      {!isPlayerReady || !character ? (
        <BaseButton type="button" onClick={onStartTurn} cypressSelector="start-turn-btn">
          {t('startTurn')}
        </BaseButton>
      ) : (
        <>
          {!isFirstRound && (<ControlButton
            type="notCorrect"
            onClick={() => {
              onGuess({ isCorrect: false, character });
            }}
          />)}
          <ControlButton
            type="correct"
            onClick={() => {
              onGuess({ isCorrect: true, character });
            }}
          />
        </>
      )}
    </div>
  );
};

export default Controls;
