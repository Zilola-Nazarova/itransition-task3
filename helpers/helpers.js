export const sleep = (ms = 500) => new Promise((r) => setTimeout(r, ms));
export const isUnique = (array) => (new Set(array)).size == array.length;
