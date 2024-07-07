import { StrictMode } from 'react';
import { RouterProvider } from 'app/providers/router/router-provider';
import 'app/styles/index.scss';

export const App = () => (
  <StrictMode>
    <RouterProvider />
  </StrictMode>
);
