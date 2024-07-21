import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from 'app/layouts/app-layout';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { ROUTE_PATHS } from 'shared/model/constants/paths';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTE_PATHS.MAIN,
        element: <Main />,
      },
    ],
  },
]);
