import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyles } from 'app/styles/global-styles';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  min-width: 375px;
  display: flex;
  flex-direction: column;
`;

export const AppLayout = () => (
  <>
    <GlobalStyles />
    <Container>
      {/* TODO: HEADER */}
      {/* TODO: FALLBACK */}
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
      {/* TODO: FOOTER */}
    </Container>
  </>
);
