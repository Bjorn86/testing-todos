import { styled } from 'styled-components';
import { Icon, Icons } from 'shared/ui/icon';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
`;

export const Preloader = () => {
  return (
    <Container>
      <Icon icon={Icons.SPINNER} width='200px' height='200px' />
    </Container>
  );
};
