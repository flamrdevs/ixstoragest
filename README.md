<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstoragest/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="github" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="gzip" href="https://bundlejs.com/?q=ixstoragest">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixstoragest">
      <img alt="github" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixstoragest" hspace="1">
    </picture>
  </a>
</p>

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
