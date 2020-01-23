import React from "react";
import { useDispatch } from "react-redux";

import { playerGuessed } from "store/game/actions";
import { PlayerGuess } from "store/game/types";

import ControlButton from "./ControlButton";

import styles from "./Game.module.scss";

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const onGuess = (guess: PlayerGuess) => dispatch(playerGuessed(guess));
  return (
    <div className={styles.controls}>
      <ControlButton
        type="notCorrect"
        onClick={() => {
          onGuess({ isCorrect: false });
        }}
      />
      <ControlButton
        type="correct"
        onClick={() => {
          onGuess({ isCorrect: true });
        }}
      />
    </div>
  );
};

export default Controls;
