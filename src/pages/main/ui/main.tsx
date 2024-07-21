import { useContext } from 'react';
import { styled } from 'styled-components';
import { CreateTodo } from 'features/create-todo';
import { TodosContext } from 'shared/api/context';
import { Preloader } from 'shared/ui/preloader';
import { ControlPanel } from 'widgets/control-panel';
import { TodoItem } from 'widgets/todo-item';
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
  background-color: var(--color-white);
  box-shadow: var(--shadow);
`;

const TodosList = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-light-grey);
  list-style: none;
`;

const Info = styled.p`
  padding: 15px;
  font-family: var(--family);
  font-size: var(--fs-l);
  font-weight: var(--fw-300);
  line-height: var(--lh-l);
  text-align: center;
`;

export const Main = () => {
  const { filteredTodos, isError, isLoading } = useContext(TodosContext);

  return (
    <Container>
      <Title>{TEXT.title}</Title>
      <TodosWrapper aria-label={TEXT.sectionLabel}>
        <CreateTodo />
        {isLoading && <Preloader />}
        {isError && <Info>{TEXT.error}</Info>}
        {filteredTodos.length > 0 ? (
          <TodosList>
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} completed={todo.completed} value={todo.value} />
            ))}
          </TodosList>
        ) : (
          <Info>{TEXT.noContent}</Info>
        )}
        <ControlPanel />
      </TodosWrapper>
    </Container>
  );
};
