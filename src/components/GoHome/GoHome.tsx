import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import useIsHomePage from 'utils/useIsHomePage';
import routes from 'constants/routes';

import styles from './GoHome.module.scss';

const GoHome: React.FC = () => {
  const history = useHistory();
  const isHomePage = useIsHomePage();
  const { t } = useTranslation('menu');

  const onClick = () => {
    // eslint-disable-next-line no-alert
    const result = window.confirm(t('goHomePrompt'));

    if (result) history.push(routes.start);
  };

  if (isHomePage) return null;

  return (
    <button type="button" className={styles.btn} onClick={onClick} data-cy="go-home-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" /></svg>
    </button>
  );
};

export default GoHome;
