import React from 'react';
import cn from 'classnames';

import BaseText from 'components/BaseText/BaseText';

import styles from './BaseButton.module.scss';

interface Props {
  onClick?: () => void;
  type: 'submit' | 'button';
  className?: 'string';
  cypressSelector?: string;
  isDisabled?: boolean;
}

const BaseButton: React.FC<Props> = ({
  onClick,
  type,
  children,
  cypressSelector,
  isDisabled,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={cn(styles.primary, { [styles.disabled]: isDisabled })}
    data-cy={cypressSelector}
    disabled={isDisabled}
  >
    <BaseText tag="span" size={5} className={styles.primaryText} isBold>
      {children}
    </BaseText>
  </button>
);

export default BaseButton;
