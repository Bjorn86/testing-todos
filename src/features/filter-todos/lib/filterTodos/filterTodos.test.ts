import { Todo } from 'shared/api/firebase';
import { filterTodos } from './filterTodos';
import { FILTER } from '../../model/constants';

describe('Тестирование функции filterTodos', () => {
  it('Функция должна вернуть все незавершённые сущности если фильтр имеет значение ACTIVE', () => {
    const todos: Todo[] = [
      { id: '1', value: 'Task 1', completed: false },
      { id: '2', value: 'Task 2', completed: true },
      { id: '3', value: 'Task 3', completed: false },
    ];

    expect(filterTodos(todos, FILTER.ACTIVE)).toEqual([
      { id: '1', value: 'Task 1', completed: false },
      { id: '3', value: 'Task 3', completed: false },
    ]);
  });

  it('Функция должна вернуть все завершённые сущности если фильтр имеет значение COMPLETED', () => {
    const todos: Todo[] = [
      { id: '1', value: 'Task 1', completed: false },
      { id: '2', value: 'Task 2', completed: true },
      { id: '3', value: 'Task 3', completed: false },
    ];

    expect(filterTodos(todos, FILTER.COMPLETED)).toEqual([
      { id: '2', value: 'Task 2', completed: true },
    ]);
  });

  it('Функция должна вернуть пустой массив, если в переданном массиве нет сущностей', () => {
    const todos: Todo[] = [];
    const filter = FILTER.ACTIVE;
    expect(filterTodos(todos, filter)).toEqual([]);
  });
});
