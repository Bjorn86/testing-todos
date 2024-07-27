import { useContext } from 'react';
import { styled } from 'styled-components';
import { CreateTodo } from 'features/create-todo';
import { TodosContext } from 'shared/api/context';
import { Todo } from 'shared/api/firebase';
import testUtils from 'shared/lib/test';
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
  line-height: var(--lh-xl);
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
  line-height: var(--lh-m);
  color: var(--color-black);
  text-align: center;
`;

export const Main = () => {
  const { filteredTodos, isError, isLoading } = useContext(TodosContext);
  const errorTestId = testUtils.getTestIdAttribute('main-page', 'error');
  const listTestId = testUtils.getTestIdAttribute('main-page', 'list');
  const noContentTestId = testUtils.getTestIdAttribute('main-page', 'no-content');
  const canRenderTodos = !isError && !isLoading;

  const renderTodos = (todos: Todo[]) => {
    return filteredTodos.length > 0 ? (
      <TodosList {...listTestId}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} completed={todo.completed} value={todo.value} />
        ))}
      </TodosList>
    ) : (
      <Info {...noContentTestId}>{TEXT.noContent}</Info>
    );
  };

  return (
    <Container>
      <Title>{TEXT.title}</Title>
      <TodosWrapper aria-label={TEXT.sectionLabel}>
        <CreateTodo />
        {isLoading && <Preloader testId='main-page' />}
        {isError && <Info {...errorTestId}>{TEXT.error}</Info>}
        {canRenderTodos && renderTodos(filteredTodos)}
        <ControlPanel />
      </TodosWrapper>
    </Container>
  );
};
