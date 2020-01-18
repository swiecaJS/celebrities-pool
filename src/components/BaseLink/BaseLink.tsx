import React from "react";
import { Link } from "react-router-dom";
import cn from 'classnames'

import BaseText from "components/BaseText/BaseText";

import styles from "./BaseLink.module.scss";

interface Props {
  type: "primary";
  to: string
  className?: string
}

const BaseLink: React.FC<Props> = ({ children, type, to, className }) => {
  return (
    <Link to={to} className={cn(styles[type], className)}>
      <BaseText tag="span" size={5} className={styles[`${type}Text`]} isBold>
        {children}
      </BaseText>
    </Link>
  );
};

export default BaseLink;
