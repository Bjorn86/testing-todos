import { styled } from 'styled-components';
import { Todo } from 'entities/todo';

const TodoListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-light-grey);
`;

interface Props {
  completed: boolean;
  value: string;
}

export const TodoItem = ({ completed, value }: Props) => {
  return (
    <TodoListItem>
      <Todo completed={completed} value={value} />
    </TodoListItem>
  );
};
