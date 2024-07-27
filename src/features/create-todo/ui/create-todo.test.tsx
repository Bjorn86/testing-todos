import { render, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createTodo } from 'shared/api/firebase';
import { CreateTodo } from './create-todo';

jest.mock('shared/api/firebase', () => ({
  createTodo: jest.fn(),
}));

const inputTestId = 'input-create-todo';
const formTestId = 'form-create-todo';
const testTodo = 'Test todo';
const text = 'loong text';
const longText = text.repeat(10);

describe('Тестирование компонента CreateTodo', () => {
  it('Компонент должен корректно отрисовываться, инпут должен иметь корректное значение по умолчанию', () => {
    const { getByTestId } = render(<CreateTodo />);
    const inputElement = getByTestId(inputTestId) as HTMLInputElement;

    expect(inputElement.value).toBe('');
  });

  it('При сабмите формы должна вызываться функция createTodo с корректными аргументами, а инпут должен очищаться', async () => {
    const { getByTestId } = render(<CreateTodo />);
    const inputElement = getByTestId(inputTestId) as HTMLInputElement;
    const formElement = getByTestId(formTestId);

    fireEvent.change(inputElement, { target: { value: testTodo } });
    fireEvent.submit(formElement);

    await waitFor(() => {
      expect(createTodo).toHaveBeenCalledWith(testTodo);
      expect(inputElement.value).toBe('');
    });
  });

  it('Значение в ипуте не должно превышать установленный максимальный порог в 100 символов', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<CreateTodo />);
    const inputElement = getByTestId(inputTestId) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: longText } });
    user.type(inputElement, '!');

    await waitFor(() => {
      expect(inputElement.value).toBe(text.repeat(10));
      expect(inputElement.value.length).toBe(100);
    });
  });
});
