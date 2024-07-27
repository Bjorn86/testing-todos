import { createContext } from 'react';
import { Todo } from 'shared/api/firebase';

export interface TodosContextValue {
  todos: Todo[];
  filteredTodos: Todo[];
  setFilteredTodos: (data: Todo[]) => void;
  isError: boolean;
  isLoading: boolean;
}

export const TodosContext = createContext<TodosContextValue>({
  todos: [],
  filteredTodos: [],
  setFilteredTodos: () => {},
  isError: false,
  isLoading: false,
});
