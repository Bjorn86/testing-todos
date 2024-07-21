import { Todo } from 'shared/api/firebase';
import { getActiveTodosCount } from './getActiveTodosCount';

describe('Тестирование функции getActiveTodosCount', () => {
  it('Функция должна вернуть 0 если массив пуст', () => {
    const todos: Todo[] = [];

    expect(getActiveTodosCount(todos)).toBe(0);
  });

  it('Функция должна вернуть 2 если в массиве две не завершённые сущности', () => {
    const todos: Todo[] = [
      { id: '1', value: 'Task 1', completed: false },
      { id: '2', value: 'Task 2', completed: false },
    ];

    expect(getActiveTodosCount(todos)).toBe(2);
  });

  it('Функция должна вернуть 1 если в массиве одна сущность завершена, а вторая нет', () => {
    const todos: Todo[] = [
      { id: '1', value: 'Task 1', completed: false },
      { id: '2', value: 'Task 2', completed: true },
    ];

    expect(getActiveTodosCount(todos)).toBe(1);
  });

  it('Функция должна вернуть 0 если обе сущности в массиве завершены', () => {
    const todos: Todo[] = [
      { id: '1', value: 'Task 1', completed: true },
      { id: '2', value: 'Task 2', completed: true },
    ];

    expect(getActiveTodosCount(todos)).toBe(0);
  });
});
