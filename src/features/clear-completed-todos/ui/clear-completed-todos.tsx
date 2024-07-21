import { useContext } from 'react';
import { styled } from 'styled-components';
import { TodosContext } from 'shared/api/context';
import { removeCompletedTodos } from 'shared/api/firebase';
import { TEXT } from '../model/constants';

const Button = styled.button`
  padding: 5px 8px;
  background-color: transparent;
  font-family: var(--family);
  font-size: var(--fs-s);
  font-weight: var(--fw-300);
  line-height: var(--lh-s);
  color: var(--color-black);
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

export const ClearCompletedTodos = () => {
  const { todos } = useContext(TodosContext);

  const handleClearCompletedTodos = () => {
    removeCompletedTodos(todos);
  };

  return <Button onClick={handleClearCompletedTodos}>{TEXT.clear}</Button>;
};
