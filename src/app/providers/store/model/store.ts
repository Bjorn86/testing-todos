import { configureStore } from '@reduxjs/toolkit';
import { RootState } from 'shared/model/types/redux';
import { rootReducer } from './root-reducer';

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(),
    devTools: __MODE__ !== 'production',
    preloadedState,
  });
};
