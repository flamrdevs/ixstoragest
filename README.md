<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstoragest/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="license" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixstoragest">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/npm/version?t=dark&n=ixstoragest">
      <img alt="version" src="https://flamrdevs.cyclic.app/npm/version?t=light&n=ixstoragest" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixstoragest">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixstoragest">
      <img alt="size" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixstoragest" hspace="1">
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
