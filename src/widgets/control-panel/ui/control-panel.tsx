import { useContext } from 'react';
import { styled } from 'styled-components';
import { ClearCompletedTodos } from 'features/clear-completed-todos';
import { FilterTodos } from 'features/filter-todos';
import { TodosContext } from 'shared/api/context';
import { getActiveTodosCount } from '../lib/getActiveTodosCount/getActiveTodosCount';
import { TEXT } from '../model/constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const ActiveTodoCount = styled.p`
  font-family: var(--family);
  font-size: var(--fs-s);
  font-weight: var(--fw-300);
  line-height: var(--lh-s);
  color: var(--color-black);
`;

export const ControlPanel = () => {
  const { todos } = useContext(TodosContext);

  return (
    <Wrapper>
      <ActiveTodoCount>
        {getActiveTodosCount(todos)} {TEXT.count}
      </ActiveTodoCount>
      <FilterTodos />
      <ClearCompletedTodos />
    </Wrapper>
  );
};
