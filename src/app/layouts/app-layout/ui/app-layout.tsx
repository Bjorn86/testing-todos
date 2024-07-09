import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyles } from 'app/styles/global-styles';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  min-width: 375px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-dark-white);
`;

export const AppLayout = () => (
  <>
    <GlobalStyles />
    <Container>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </Container>
  </>
);
