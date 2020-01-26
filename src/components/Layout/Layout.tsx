import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.scss';

const propTypes = {};
const defaultProps = {};

type Props = PropTypes.InferProps<typeof propTypes>;

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    <main className={styles.game}>
      {children}
    </main>
  </div>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
