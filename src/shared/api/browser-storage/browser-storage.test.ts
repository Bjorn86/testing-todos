import { BrowserStorageApi } from './browser-storage';

enum SomeLSKeys {
  SOME = 'SOME',
  ANOTHER = 'ANOTHER',
}

const testValue = 'test';
const anotherTestValue = 'another test';

describe('Тестирование класса CardFormLSApi', () => {
  let someStorage: BrowserStorageApi<Record<string, string>>;

  beforeEach(() => {
    someStorage = new BrowserStorageApi(localStorage, SomeLSKeys);
  });

  it('Изначально значения в хранилище должны иметь значение null', () => {
    expect(someStorage.getValue(SomeLSKeys.SOME)).toBeNull();
    expect(someStorage.getValue(SomeLSKeys.ANOTHER)).toBeNull();
  });

  it('Метод getValue должен вернуть значение по ключу установленное методом setValue', () => {
    someStorage.setValue(SomeLSKeys.SOME, testValue);
    expect(someStorage.getValue(SomeLSKeys.SOME)).toBe(testValue);
  });

  it('Метод getValue должен вернуть null в качестве значения по ключу, если значение сначала было установлено методом setValue, а позже удалено методом clearValue', () => {
    someStorage.setValue(SomeLSKeys.SOME, testValue);
    expect(someStorage.getValue(SomeLSKeys.SOME)).toBe(testValue);

    someStorage.clearValue(SomeLSKeys.SOME);
    expect(someStorage.getValue(SomeLSKeys.SOME)).toBeNull();
  });

  it('Метод getValue должен вернуть null в качестве значения по ключам, если значения сначала были установлены методом setValue, а позже удалены методом clearStorage', () => {
    someStorage.setValue(SomeLSKeys.SOME, testValue);
    expect(someStorage.getValue(SomeLSKeys.SOME)).toBe(testValue);

    someStorage.setValue(SomeLSKeys.ANOTHER, anotherTestValue);
    expect(someStorage.getValue(SomeLSKeys.ANOTHER)).toBe(anotherTestValue);

    someStorage.clearStorage([SomeLSKeys.SOME, SomeLSKeys.ANOTHER]);

    expect(someStorage.getValue(SomeLSKeys.SOME)).toBeNull();
    expect(someStorage.getValue(SomeLSKeys.ANOTHER)).toBeNull();
  });
});
