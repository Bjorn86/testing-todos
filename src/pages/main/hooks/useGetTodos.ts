import { useEffect, useState } from 'react';
import { getTodos, updateTodos } from 'shared/api/firebase';
import { Todo } from '../model/types';

export const useGetTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  return { todos, isLoading, isError };
};
