import { render, fireEvent } from '@testing-library/react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from './input';

const TestComponent = () => {
  const { control } = useForm();

  return (
    <div>
      <Controller
        control={control}
        name='testInput'
        render={({ field }) => (
          <Input type='text' placeholder={'Enter text'} maxLength={10} testId='test' {...field} />
        )}
      />
    </div>
  );
};

const DisabledTestComponent = () => {
  const { control } = useForm();

  return (
    <div>
      <Controller
        control={control}
        name='testInput'
        render={({ field }) => (
          <Input
            type='text'
            placeholder={'Enter text'}
            maxLength={10}
            testId='test'
            disabled
            {...field}
          />
        )}
      />
    </div>
  );
};

const expectTestId = 'input-test';

describe('Тестирование компонента Input', () => {
  it('Компонент отрисовывается с корректными атрибутами', () => {
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId(expectTestId)).toBeInTheDocument();
    expect(getByTestId(expectTestId)).toHaveAttribute('type', 'text');
    expect(getByTestId(expectTestId)).toHaveAttribute('name', 'testInput');
    expect(getByTestId(expectTestId)).toHaveAttribute('placeholder', 'Enter text');
    expect(getByTestId(expectTestId)).toHaveAttribute('maxLength', '10');
    expect(getByTestId(expectTestId)).not.toBeDisabled();
  });

  it('Компонент должен отрисовывается с корректным атрибутом disabled', () => {
    const { getByTestId } = render(<DisabledTestComponent />);

    expect(getByTestId(expectTestId)).toBeInTheDocument();
    expect(getByTestId(expectTestId)).toHaveAttribute('type', 'text');
    expect(getByTestId(expectTestId)).toHaveAttribute('name', 'testInput');
    expect(getByTestId(expectTestId)).toHaveAttribute('placeholder', 'Enter text');
    expect(getByTestId(expectTestId)).toHaveAttribute('maxLength', '10');
    expect(getByTestId(expectTestId)).toBeDisabled();
  });

  it('Значение value изменяется при вводе', () => {
    const { getByTestId } = render(<TestComponent />);

    fireEvent.change(getByTestId(expectTestId), { target: { value: 'Hello' } });
    expect(getByTestId(expectTestId)).toHaveValue('Hello');
  });
});
