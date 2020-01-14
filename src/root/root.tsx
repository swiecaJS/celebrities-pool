import React from "react";
import PropTypes from "prop-types";

import styles from './root.module.scss';

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const root: React.FC<Props> = props => {
  return <div className={styles.page}>root</div>;
};

root.propTypes = propTypes;
root.defaultProps = defaultProps;

export default root;
