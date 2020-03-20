import { useLocation } from 'react-router-dom';

import routes from 'constants/routes';

export default function useIsHomePage() {
  const { pathname } = useLocation();
  return pathname === routes.start;
}
