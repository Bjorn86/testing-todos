import { styled } from 'styled-components';
import { TEXT } from '../model/constants';

const Container = styled.main`
  width: var(--base-width);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 auto;
  font-family: var(--family);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-300);
  line-height: var(--lh-xxl);
  color: var(--color-light-green);
`;

export const Main = () => {
  return (
    <Container>
      <Title>{TEXT.title}</Title>
    </Container>
  );
};
