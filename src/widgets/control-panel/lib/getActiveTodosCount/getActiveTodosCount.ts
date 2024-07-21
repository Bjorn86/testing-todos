import { Todo } from 'shared/api/firebase';

export const getActiveTodosCount = (todos: Todo[]): number => {
  return todos.filter((todo) => !todo.completed).length;
};
