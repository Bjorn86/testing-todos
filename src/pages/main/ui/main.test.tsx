import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { TodosContext, TodosContextValue } from 'shared/api/context';
import { Todo } from 'shared/api/firebase';
import { Main } from './main';

jest.mock('shared/api/firebase', () => ({
  createTodo: jest.fn(),
}));

const todos = [
  { id: '1', completed: true, value: 'some' },
  { id: '2', completed: false, value: 'another' },
] as Todo[];
const preloaderTestId = 'preloader-main-page';
const errorTestId = 'main-page-error';
const listTestId = 'main-page-list';
const noContentTestId = 'main-page-no-content';

const customRender = (ui: ReactElement, providerProps: TodosContextValue) => {
  return render(<TodosContext.Provider value={providerProps}>{ui}</TodosContext.Provider>);
};

describe('Тестирование компонента Main', () => {
  let providerProps: TodosContextValue;

  beforeEach(
    () =>
      (providerProps = {
        todos: todos,
        filteredTodos: todos,
        setFilteredTodos: () => {},
        isError: false,
        isLoading: false,
      }),
  );

  it('В компоненте должен отрисовываться компонент Preloader если isLoading = true, и не отрисовываться другие компоненты', () => {
    const { getByTestId, queryByTestId } = customRender(<Main />, {
      ...providerProps,
      isLoading: true,
    });

    expect(getByTestId(preloaderTestId)).toBeInTheDocument();
    expect(queryByTestId(errorTestId)).not.toBeInTheDocument();
    expect(queryByTestId(listTestId)).not.toBeInTheDocument();
    expect(queryByTestId(noContentTestId)).not.toBeInTheDocument();
  });

  it('В компоненте должна отрисовываться ошибка если isError = true, и не отрисовываться другие компоненты', () => {
    const { getByTestId, queryByTestId } = customRender(<Main />, {
      ...providerProps,
      isError: true,
    });

    expect(getByTestId(errorTestId)).toBeInTheDocument();
    expect(queryByTestId(preloaderTestId)).not.toBeInTheDocument();
    expect(queryByTestId(listTestId)).not.toBeInTheDocument();
    expect(queryByTestId(noContentTestId)).not.toBeInTheDocument();
  });

  it('В компоненте должен отрисовываться список если массив filteredTodos содержит сущности, и не отрисовываться другие компоненты', () => {
    const { getByTestId, queryByTestId } = customRender(<Main />, providerProps);

    expect(getByTestId(listTestId)).toBeInTheDocument();
    expect(queryByTestId(preloaderTestId)).not.toBeInTheDocument();
    expect(queryByTestId(errorTestId)).not.toBeInTheDocument();
    expect(queryByTestId(noContentTestId)).not.toBeInTheDocument();
  });

  it('В компоненте должно отрисовываться информационное сообщение если массив filteredTodos пуст, и не отрисовываться другие компоненты', () => {
    const { getByTestId, queryByTestId } = customRender(<Main />, {
      ...providerProps,
      filteredTodos: [],
    });

    expect(getByTestId(noContentTestId)).toBeInTheDocument();
    expect(queryByTestId(preloaderTestId)).not.toBeInTheDocument();
    expect(queryByTestId(errorTestId)).not.toBeInTheDocument();
    expect(queryByTestId(listTestId)).not.toBeInTheDocument();
  });
});
