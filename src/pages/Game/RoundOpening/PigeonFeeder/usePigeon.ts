import { useState } from 'react';

import { PigeonContext } from './PigeonContext';

export const usePigeon = (): PigeonContext => {
  const [isPigeonFed, setPigeonFed] = useState(!!(window as any).Cypress);

  const feedPigeon = () => setPigeonFed(true);

  return {
    feedPigeon,
    isPigeonFed,
  };
};
