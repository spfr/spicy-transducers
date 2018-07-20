export const update = (key, updater) => object => ({
  ...object,
  [key]: updater(object[key]),
});
