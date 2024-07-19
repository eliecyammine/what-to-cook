'use client';

import { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import store from '../state/store';

/// ---------- || REDUX PROVIDER || ---------- ///

export function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
