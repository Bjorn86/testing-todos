import { styled } from 'styled-components';
import { CreateTodo } from 'features/create-todo';
import { TEXT } from '../model/constants';

const Container = styled.main`
  width: var(--base-width);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0 auto;
  font-family: var(--family);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-300);
  line-height: var(--lh-xxl);
  color: var(--color-dark-green);
`;

const TodosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
`;

export const Main = () => {
  return (
    <Container>
      <Title>{TEXT.title}</Title>
      <TodosWrapper aria-label={TEXT.sectionLabel}>
        <CreateTodo />
      </TodosWrapper>
    </Container>
  );
};
