import { render } from '@testing-library/react';
import { FilterButton } from './filter-button';

const filterBtn = {
  id: '1',
  text: 'Filter',
  isActive: true,
};
const testId = 'filter-btn-1';

describe('Тестирование компонента FilterButton', () => {
  it('Компонент корректно отрисовывается и имеет необходимые стили если isActive = true', () => {
    const { getByTestId } = render(
      <FilterButton text={filterBtn.text} isActive={filterBtn.isActive} testId={filterBtn.id} />,
    );

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveTextContent(filterBtn.text);
    expect(getByTestId(testId)).toHaveStyleRule('border', '1px solid var(--color-dark-green)');
  });

  it('Компонент корректно отрисовывается и имеет необходимые стили если isActive = false', () => {
    const { getByTestId } = render(
      <FilterButton text={filterBtn.text} isActive={!filterBtn.isActive} testId={filterBtn.id} />,
    );

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveTextContent(filterBtn.text);
    expect(getByTestId(testId)).toHaveStyleRule('border', '1px solid transparent');
  });
});
