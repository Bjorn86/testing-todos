import { Todo } from 'shared/api/firebase';
import { FILTER } from '../../model/constants';

export const filterTodos = (todos: Todo[], filter: string): Todo[] => {
  return filter === FILTER.ACTIVE
    ? todos.filter((todo) => !todo.completed)
    : todos.filter((todo) => todo.completed);
};
