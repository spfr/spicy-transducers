export default (key, updater) => object => ({
  ...object,
  [key]: updater(object[key]),
});
