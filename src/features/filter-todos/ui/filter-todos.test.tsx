import { render } from '@testing-library/react';
import { FilterTodos } from './filter-todos';
import { BUTTONS } from '../model/constants';

const testId = 'filter-wrapper';

describe('Тестирование компонента FilterTodos', () => {
  it('Компонент должен корректно отрисовываться', () => {
    const { getByTestId } = render(<FilterTodos />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('Компонент должен отрисовывать корректное количество кнопок', () => {
    const { getAllByTestId } = render(<FilterTodos />);

    expect(getAllByTestId('filter-btn', { exact: false }).length).toBe(BUTTONS.length);
  });

  it('Компонент должен отрисовывать кнопки с корректным текстом', () => {
    const { getAllByTestId } = render(<FilterTodos />);

    BUTTONS.forEach((button, index) => {
      expect(getAllByTestId('filter-btn', { exact: false })[index]).toHaveTextContent(button.text);
    });
  });
});
