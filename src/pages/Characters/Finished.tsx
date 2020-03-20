import React from 'react';
import { useTranslation } from 'react-i18next';

import routes from 'constants/routes';

import BaseLink from 'components/BaseLink/BaseLink';

const Finished: React.FC = () => {
  const { t } = useTranslation('addingCharacters');
  return (
    <BaseLink to={routes.game} type="primary" cypressSelector="characters-entering-finished">
      {t('start')}
    </BaseLink>
  );
};

export default Finished;
