import { render } from '@testing-library/react';
import { Icon } from './icon';
import { Icons } from '../model/constants';

const testId = 'test';
const expectTestId = 'icon-test';
const style = { color: 'red' };

describe('Тестирование компонента Icon', () => {
  it('Компонент отображается без ошибок', () => {
    const { getByTestId } = render(
      <Icon icon={Icons.CHEVRON_DOWN} width='24px' height='24px' testId={testId} />,
    );

    expect(getByTestId(expectTestId)).toBeInTheDocument();
  });

  it('Переданные стили корректно применяются к элементу', () => {
    const { container } = render(
      <Icon icon={Icons.CHEVRON_DOWN} width='24px' height='24px' style={style} />,
    );

    expect(container.firstChild).toHaveStyle(`color: ${style.color}`);
  });
});
