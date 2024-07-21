import { ReactNode, useEffect, useMemo, useState } from 'react';
import { TodosContext } from 'shared/api/context';
import { getTodos, Todo, updateTodos } from 'shared/api/firebase';

interface Props {
  children: ReactNode;
}

export const TodosContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const memoizedValues = useMemo(
    () => ({ todos, filteredTodos, setFilteredTodos, isError, isLoading }),
    [todos, filteredTodos, setFilteredTodos, isError, isLoading],
  );

  useEffect(() => {
    getTodos()
      .then((res) => {
        setTodos(res);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = updateTodos(setTodos);

    return unsubscribe;
  }, []);

  return <TodosContext.Provider value={memoizedValues}>{children}</TodosContext.Provider>;
};
