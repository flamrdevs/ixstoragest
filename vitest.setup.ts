const createStorage = (object: Record<string, string> = {}) => {
  return {
    getItem(key) {
      return typeof key === "string" && key in object ? object[key] : null;
    },
    setItem(key, value) {
      object[key] = value;
    },
    removeItem(key) {
      delete object[key];
    },
    clear() {
      object = {};
    },
    key(index) {
      return Object.keys(object)[index] ?? null;
    },
    get length() {
      return Object.keys(object).length;
    },
  } satisfies Storage;
};

global.localStorage = createStorage();
global.sessionStorage = createStorage();
