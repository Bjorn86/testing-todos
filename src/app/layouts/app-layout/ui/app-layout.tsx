import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './app-layout.module.scss';

export const AppLayout = () => (
  <div className={s.appLayout}>
    some
    {/* TODO: HEADER */}
    {/* TODO: FALLBACK */}
    <Suspense fallback={'Loading...'}>
      <Outlet />
    </Suspense>
    {/* TODO: FOOTER */}
  </div>
);
