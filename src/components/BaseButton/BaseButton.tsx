import React from 'react';

import BaseText from 'components/BaseText/BaseText';

import styles from './BaseButton.module.scss';

interface Props {
  onClick?: () => void;
  type: 'submit' | 'button';
  className?: 'string';
  cypressSelector?: string;
}

const BaseButton: React.FC<Props> = ({
  onClick,
  type,
  children,
  cypressSelector,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={styles.primary}
    data-cy={cypressSelector}
  >
    <BaseText tag="span" size={5} className={styles.primaryText} isBold>
      {children}
    </BaseText>
  </button>
);

export default BaseButton;
