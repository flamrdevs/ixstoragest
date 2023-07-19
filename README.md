# ixstoragest

simple state management with storage

## Usage

```ts
import ixstoragest from "ixstoragest";

const store = ixstoragest("hello", {
  hello: "world",
});

const unsub = store.sub((value) => {
  console.log(value);
});

store.get().hello; // world

store.set({ hello: "ixstore" });

// { hello: "ixstore" }

store.get().hello; // ixstore

unsub();
```

## License

MIT
