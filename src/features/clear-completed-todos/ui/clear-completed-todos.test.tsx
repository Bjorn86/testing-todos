import { ReactElement } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodosContext, TodosContextValue } from 'shared/api/context';
import { removeCompletedTodos, Todo } from 'shared/api/firebase';
import { ClearCompletedTodos } from './clear-completed-todos';
import { TEXT } from '../model/constants';

jest.mock('shared/api/firebase', () => ({
  removeCompletedTodos: jest.fn(),
}));

const todos = [
  { id: '1', completed: true, value: 'some' },
  { id: '2', completed: false, value: 'another' },
] as Todo[];
const testId = 'btn-clear';

const customRender = (ui: ReactElement, providerProps: TodosContextValue) => {
  return render(<TodosContext.Provider value={providerProps}>{ui}</TodosContext.Provider>);
};

describe('Тестирование компонента ClearCompletedTodos', () => {
  let providerProps: TodosContextValue;

  beforeEach(
    () =>
      (providerProps = {
        todos: todos,
        filteredTodos: [],
        setFilteredTodos: () => {},
        isError: false,
        isLoading: false,
      }),
  );

  it('Компонент должен корректно отрисовываться', () => {
    const { getByTestId } = customRender(<ClearCompletedTodos />, providerProps);

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveTextContent(TEXT.clear);
  });

  it('При клике на кнопку должна вызываться функция removeCompletedTodos с корректными аргументами', () => {
    const { getByTestId } = customRender(<ClearCompletedTodos />, providerProps);

    expect(removeCompletedTodos).not.toHaveBeenCalled();
    fireEvent.click(getByTestId(testId));
    expect(removeCompletedTodos).toHaveBeenCalledWith(todos);
  });
});
