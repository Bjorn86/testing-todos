import { styled } from 'styled-components';
import { Todo } from 'entities/todo';
import { ToggleTodo } from 'features/toggle-todo';

const TodoListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-light-grey);
`;

interface Props {
  id: string;
  completed: boolean;
  value: string;
}

export const TodoItem = ({ id, completed, value }: Props) => {
  return (
    <TodoListItem>
      <ToggleTodo completed={completed} id={id} />
      <Todo completed={completed} value={value} />
    </TodoListItem>
  );
};
