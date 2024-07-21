import { StrictMode } from 'react';
import { RouterProvider } from 'app/providers/router/router-provider';
import { TodosContextProvider } from 'app/providers/todos-context-provider/todos-context-provider';

export const App = () => (
  <StrictMode>
    <TodosContextProvider>
      <RouterProvider />
    </TodosContextProvider>
  </StrictMode>
);
