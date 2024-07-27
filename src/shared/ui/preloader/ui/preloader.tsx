import { styled } from 'styled-components';
import testUtils from 'shared/lib/test';
import { Icon, Icons } from 'shared/ui/icon';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
`;

interface Props {
  testId?: string;
}

export const Preloader = ({ testId }: Props) => {
  const preloaderTestId = testUtils.getTestIdAttribute('preloader', testId);

  return (
    <Container {...preloaderTestId}>
      <Icon icon={Icons.SPINNER} width='200px' height='200px' testId='spinner' />
    </Container>
  );
};
