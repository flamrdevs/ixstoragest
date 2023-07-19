import ixstore from "ixstore";
import type { IXStore } from "ixstore";

import ixstorage from "ixstorage";

const ixstoragest = <T extends any>(key: string, initialValue: T, storage?: globalThis.Storage) => {
  const _storage = ixstorage<T>(key, initialValue, storage);
  const _store = ixstore<T>(_storage.get());

  return {
    set: (value) => _storage.set(_store.set(value)),
    get: _store.get,
    sub: _store.sub,
  } as IXStore<T>;
};

export default ixstoragest;
