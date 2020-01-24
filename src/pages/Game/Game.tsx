import React from "react";
import {useGetIsRoundOpening} from 'store/game/selectors'

import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";
import CharacterToGuess from "./CharacterToGuess";
import Header from "./Header";
import RoundOpening from './RoundOpening'

import styles from "./Game.module.scss";

const Start: React.FC = () => {
  const isRoundOpening = useGetIsRoundOpening();

  return (
    <section className={styles.wrapper}>
      {isRoundOpening ? (
        <RoundOpening />
      ) : (
        <>
        <div>
        <Header />
        <ScoreBoard />
        <div className={styles.progressBar}>
          <span className={styles.progressBarMeter}></span>
        </div>
      </div>
      <CharacterToGuess />
      <Controls />
      </>
      )}

    </section>
  );
};

export default Start;
