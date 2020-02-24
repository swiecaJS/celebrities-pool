import React from 'react';
import cn from 'classnames';

import styles from './MainScreen.module.scss';

interface Props {
  type: 'correct' | 'notCorrect';
  onClick: () => void;
}

const config = {
  correct: {
    aria: 'thumbs up',
    btnClassName: 'controlsButton--yes',
    spanClassName: 'controlsThumb--yes',
    emoji: '👍',
  },
  notCorrect: {
    aria: 'thumbs down',
    btnClassName: 'controlsButton--no',
    spanClassName: 'controlsThumb--no',
    emoji: '👎',
  },
};

const ControlButton: React.FC<Props> = ({ type, onClick }) => {
  const btnConfig = config[type];
  return (
    <button
      type="button"
      className={cn(styles.controlsButton, styles[btnConfig.btnClassName])}
      onClick={onClick}
      data-cy={type}
    >
      <span
        role="img"
        aria-label={btnConfig.aria}
        className={styles[btnConfig.spanClassName]}
      >
        {btnConfig.emoji}
      </span>
    </button>
  );
};

export default ControlButton;
