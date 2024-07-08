import { StrictMode } from 'react';
import { RouterProvider } from 'app/providers/router/router-provider';
import { StoreProvider } from 'app/providers/store/store-provider';

export const App = () => (
  <StrictMode>
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  </StrictMode>
);
