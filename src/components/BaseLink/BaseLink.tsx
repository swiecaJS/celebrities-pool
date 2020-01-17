import React from "react";
import { Link } from "react-router-dom";

import BaseText from "components/BaseText/BaseText";

import styles from "./BaseLink.module.scss";

interface Props {
  type: "primary";
  to: string
}

const BaseLink: React.FC<Props> = ({ children, type, to }) => {
  return (
    <Link to={to} className={styles[type]}>
      <BaseText tag="span" size={5} className={styles[`${type}Text`]} isBold>
        {children}
      </BaseText>
    </Link>
  );
};

export default BaseLink;
