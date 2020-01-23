import React from "react";
import { useDispatch } from "react-redux";

import { initialSetup } from "store/game/actions";

import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";
import CharacterToGuess from "./CharacterToGuess";
import Header from "./Header";

import styles from "./Game.module.scss";

const Start: React.FC = () => {
  const dispatch = useDispatch();
  const onInitialSetup = React.useCallback(() => {
    dispatch(initialSetup());
  }, [dispatch]);

  React.useEffect(() => {
    onInitialSetup();
  }, [onInitialSetup]);

  return (
    <section className={styles.wrapper}>
      <div>
        <Header />
        <ScoreBoard />
        <div className={styles.progressBar}>
          <span className={styles.progressBarMeter}></span>
        </div>
      </div>
      <CharacterToGuess />
      <Controls />
    </section>
  );
};

export default Start;
