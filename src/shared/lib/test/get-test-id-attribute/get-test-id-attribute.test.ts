import { getTestIdAttribute } from './get-test-id-attribute';

const prefix = 'btn';
const testId = 'some-test';

describe('Тестирование функции setTestIdAttribute', () => {
  it('Функция должна возвращать корректные значения если передан testId', () => {
    const result = getTestIdAttribute(prefix, testId);

    expect(result).toEqual({ 'data-testid': 'btn-some-test' });
  });

  it('Функция должна возвращать null если testId не передан', () => {
    const result = getTestIdAttribute(prefix);

    expect(result).toBeNull();
  });
});
