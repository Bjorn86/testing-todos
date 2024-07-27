import { render } from '@testing-library/react';
import { Todo } from './todo';

const testId = 'todo-item';
const value = 'Sample todo';

describe('Тестирование компонента Todo', () => {
  it('Компонент корректно отрисовывается если в качестве значения передать ему непустую строку', () => {
    const { getByText } = render(<Todo completed={false} value={value} />);

    expect(getByText(value)).toBeInTheDocument();
  });

  it('К компоненту применится корректные стили если пропс completed = false', () => {
    const { getByTestId } = render(<Todo completed={false} value={value} />);

    expect(getByTestId(testId)).toHaveStyleRule('text-decoration', 'none');
    expect(getByTestId(testId)).toHaveStyleRule('color', 'var(--color-black)');
  });

  it('К компоненту применится корректные стили если пропс completed = true', () => {
    const { getByTestId } = render(<Todo completed={true} value={value} />);

    expect(getByTestId(testId)).toHaveStyleRule('text-decoration', 'line-through');
    expect(getByTestId(testId)).toHaveStyleRule('color', 'var(--color-dark-grey)');
  });
});
