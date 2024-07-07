import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from 'app/layouts/app-layout';
import { ROUTE_PATHS } from 'shared/model/constants/paths';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    /**
     * TODO: errorElement: <ErrorPage />
     */
    children: [
      {
        path: ROUTE_PATHS.MAIN,
        element: <h1>Main Page</h1>,
      },
    ],
  },
]);
