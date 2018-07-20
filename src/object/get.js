export default (key, defaultValue) => object =>
  key in object ? object[key] : defaultValue;
