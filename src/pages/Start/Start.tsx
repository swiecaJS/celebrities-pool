import React from "react";
import PropTypes from "prop-types";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const Start: React.FC<Props> = props => {
  return <div>Start</div>;
};

Start.propTypes = propTypes;
Start.defaultProps = defaultProps;

export default Start;
