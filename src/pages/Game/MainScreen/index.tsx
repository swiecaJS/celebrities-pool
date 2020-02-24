import React from 'react';

import ScoreBoard from './ScoreBoard';
import Controls from './Controls';
import CharacterToGuess from './CharacterToGuess';
import Header from './Header';
import ProgressBar from './ProgressBar';

import styles from './MainScreen.module.scss';

const MainScreen: React.FC = () => (
  <section className={styles.wrapper}>
    <div data-cy="game-standings">
      <Header />
      <ScoreBoard />
      <ProgressBar />
    </div>
    <CharacterToGuess />
    <Controls />
  </section>
);

export default MainScreen;
