import { useState } from 'react';

import { PigeonContext } from './PigeonContext';

export const usePigeon = (): PigeonContext => {
  // skip pigeon mini-game in the e2e tests
  const [isPigeonFed, setPigeonFed] = useState(!!(window as any).Cypress);

  const feedPigeon = () => setPigeonFed(true);

  return {
    feedPigeon,
    isPigeonFed,
  };
};
