import React from 'react';
import { useParams } from 'react-router-dom';

import BaseText from 'components/BaseText/BaseText';
import BaseLink from 'components/BaseLink/BaseLink';
import { config, ManualPageType } from './constants';

import gameStyles from '../GameRules.module.scss';

interface RouteParams {
  part: string;
}

const Layout: React.FC = () => {
  const params = useParams() as RouteParams;

  const manualPart = params.part as ManualPageType;

  const routeConfig = config[manualPart];

  return (
    <div className={gameStyles.wrapper}>
      <BaseText tag="h1" size={8} isBold>
        {routeConfig.header}
      </BaseText>
      <div>
        {routeConfig.content.map(text => (
          <BaseText tag="p" key={text} size={4}>
            {text}
          </BaseText>
        ))}
      </div>
      <BaseLink type="primary" to={routeConfig.nextLinkHref}>
        {routeConfig.linkLabel}
      </BaseLink>
    </div>
  );
};

export default Layout;
