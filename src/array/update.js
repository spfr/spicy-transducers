export default (index, f) => array => {
  const clone = array.slice();
  clone[index] = f(clone[index]);
  return clone;
};
