import { describe, expect, it } from "vitest";

import ixstorage from ".";

describe("ixstorage", () => {
  it("Works", () => {
    type State = "red" | "green" | "blue";

    const KEY = "storage";

    const store = ixstorage<State>(KEY, "red");

    const expects = (equalStoreGet: State, equalStorageGetItem: string | null) => {
      expect(store.get()).toEqual(equalStoreGet);
      expect(localStorage.getItem(KEY)).toEqual(equalStorageGetItem);
    };

    expects("red", null);

    store.set("green");

    expects("green", `"green"`);

    store.set("blue");

    expects("blue", `"blue"`);
  });
});
