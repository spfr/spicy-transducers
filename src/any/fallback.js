export default fallback => value =>
  value === null || value === undefined ? fallback : value;
