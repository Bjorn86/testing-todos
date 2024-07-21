import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Preloader } from 'shared/ui/preloader';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  min-width: 375px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-dark-grey);
`;

export const AppLayout = () => (
  <Container>
    <Suspense fallback={<Preloader />}>
      <Outlet />
    </Suspense>
  </Container>
);
