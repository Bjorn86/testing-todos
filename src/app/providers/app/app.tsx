import { StrictMode } from 'react';
import { RouterProvider } from 'app/providers/router/router-provider';
import { TodosContextProvider } from 'app/providers/todos-context-provider/todos-context-provider';
import { GlobalStyles } from 'app/styles/global-styles';

export const App = () => (
  <StrictMode>
    <TodosContextProvider>
      <GlobalStyles />
      <RouterProvider />
    </TodosContextProvider>
  </StrictMode>
);
