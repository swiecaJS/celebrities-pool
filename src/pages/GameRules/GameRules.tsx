import React from "react";
import PropTypes from "prop-types";

import routes from "constants/routes";

import BaseText from "components/BaseText/BaseText";
import BaseLink from "components/BaseLink/BaseLink";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const GameRules: React.FC<Props> = props => {
  return (
    <section>
      <BaseText tag="h1" size={8}>
        Do you know how to play?
      </BaseText>
      <BaseLink to={routes.settings} type="primary">
        Yes
      </BaseLink>
    </section>
  );
};

GameRules.propTypes = propTypes;
GameRules.defaultProps = defaultProps;

export default GameRules;
