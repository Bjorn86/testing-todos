export class BrowserStorageApi<T extends Record<string, string>> {
  storage: Storage;
  storageKeys: T;

  constructor(storage: Storage, storageKeys: T) {
    this.storage = storage;
    this.storageKeys = storageKeys;
  }

  setValue<V>(key: keyof T, value: V) {
    this.storage.setItem(this.storageKeys[key], JSON.stringify({ value }));
  }

  getValue<V>(key: keyof T): V | null {
    const readData = this.storage.getItem(this.storageKeys[key]);
    return readData ? (JSON.parse(readData).value as V) : null;
  }

  clearValue(key: keyof T) {
    this.storage.removeItem(this.storageKeys[key]);
  }

  clearStorage(keys: (keyof T)[]) {
    keys.forEach((key) => {
      this.storage.removeItem(this.storageKeys[key]);
    });
  }
}
