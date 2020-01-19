import React from "react";
import PropTypes from "prop-types";

import routes from 'constants/routes'

import BaseText from "components/BaseText/BaseText";
import BaseLink from "components/BaseLink/BaseLink";

import styles from "./Start.module.scss";

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const Start: React.FC<Props> = props => {
  return (
    <section className={styles.wrapper}>
      <BaseText tag="h1" size={9} isBold>
        Sack of Celebrities
        <span role="img" aria-label="money sack">
          💰
        </span>
      </BaseText>
      <BaseLink to={routes.rules} type="primary">
        Start
      </BaseLink>
    </section>
  );
};

Start.propTypes = propTypes;
Start.defaultProps = defaultProps;

export default Start;
