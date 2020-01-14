import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./BaseText.module.scss";

const propTypes = {
  className: PropTypes.string,
  isBold: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])
};

const defaultProps = {
  isBold: false,
  size: 3
};

type InferredProps = PropTypes.InferProps<typeof propTypes>;

interface Props extends InferredProps {
  tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}
const Text: React.FC<Props> = ({ tag, children, className, isBold, size }) => {
  return React.createElement(
    tag,
    {
      className: cn(styles.text, className, styles[`size--${size}`], {
        [styles.bold]: isBold
      })
    },
    children
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
