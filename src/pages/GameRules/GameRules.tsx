import React from "react";
import PropTypes from "prop-types";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const GameRules: React.FC<Props> = props => {
  return <div>GameRules</div>;
};

GameRules.propTypes = propTypes;
GameRules.defaultProps = defaultProps;

export default GameRules;
