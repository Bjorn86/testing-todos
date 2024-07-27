import { render } from '@testing-library/react';
import { Preloader } from './preloader';

const preloaderTestId = 'preloader-test';
const iconTestId = 'icon-spinner';

describe('Тестирование компонента Preloader', () => {
  it('Компонент должен корректно отрисовываться', () => {
    const { getByTestId } = render(<Preloader testId='test' />);

    expect(getByTestId(preloaderTestId)).toBeInTheDocument();
    expect(getByTestId(iconTestId)).toBeInTheDocument();
  });
});
