import { fireEvent, render } from '@testing-library/react';
import { updateTodoStatus } from 'shared/api/firebase';
import { ToggleTodo } from './toggle-todo';
import { TEXT } from '../model/constants';

jest.mock('shared/api/firebase', () => ({
  updateTodoStatus: jest.fn(),
}));

const completedTodo = {
  id: '123',
  completed: true,
};
const uncompletedTodo = {
  id: '321',
  completed: false,
};
const completedSvgTestId = 'icon-completed';
const uncompletedSvgTestId = 'icon-uncompleted';
const switcherTestId = 'switcher-todo';

describe('Тестирование компонента ToggleTodo', () => {
  it('Компонент должен корректно отрисовываться', () => {
    const { getByTestId } = render(
      <ToggleTodo completed={completedTodo.completed} id={completedTodo.id} />,
    );

    expect(getByTestId(completedSvgTestId)).toBeInTheDocument();
    expect(getByTestId(switcherTestId)).toBeInTheDocument();
  });

  it('Компонент должен иметь корректный атрибут aria-label при completed = true, а также корректную иконку', () => {
    const { getByTestId } = render(
      <ToggleTodo completed={completedTodo.completed} id={completedTodo.id} />,
    );

    expect(getByTestId(switcherTestId)).toHaveAttribute('aria-label', TEXT.completed);
    expect(getByTestId(completedSvgTestId)).toBeInTheDocument();
  });

  it('Компонент должен иметь корректный атрибут aria-label при completed = false, а также корректную иконку', () => {
    const { getByTestId } = render(
      <ToggleTodo completed={uncompletedTodo.completed} id={uncompletedTodo.id} />,
    );

    expect(getByTestId(switcherTestId)).toHaveAttribute('aria-label', TEXT.uncompleted);
    expect(getByTestId(uncompletedSvgTestId)).toBeInTheDocument();
  });

  it('При клике на кнопку должна вызываться функция updateTodoStatus с корректными аргументами', () => {
    const { getByTestId } = render(
      <ToggleTodo completed={completedTodo.completed} id={completedTodo.id} />,
    );

    fireEvent.click(getByTestId(switcherTestId));
    expect(updateTodoStatus).toHaveBeenCalledWith(completedTodo.id, !completedTodo.completed);
  });
});
