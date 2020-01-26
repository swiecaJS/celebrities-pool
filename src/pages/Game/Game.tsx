import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGetIsRoundOpening, useGetHasGameEnded } from "store/game/selectors";

import routes from "constants/routes";

import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";
import CharacterToGuess from "./CharacterToGuess";
import Header from "./Header";
import RoundOpening from "./RoundOpening";

import styles from "./Game.module.scss";

const Start: React.FC = () => {
  const isRoundOpening = useGetIsRoundOpening();
  const hasGameEnded = useGetHasGameEnded();
  const history = useHistory();

  useEffect(() => {
    if (hasGameEnded) history.push(routes.results);
  }, [hasGameEnded, history]);

  // TO DO - simplify
  return (
    <section className={styles.wrapper}>
      {isRoundOpening ? (
        <RoundOpening />
      ) : (
        <>
          <div data-cy="game-standings">
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
