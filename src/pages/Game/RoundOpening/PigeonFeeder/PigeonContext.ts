import React from 'react';

export interface PigeonContext {
  isPigeonFed: boolean;
  feedPigeon: () => void;
}

export const pigeonContext = React.createContext<PigeonContext>({
  isPigeonFed: false,
  feedPigeon: () => {},
});
