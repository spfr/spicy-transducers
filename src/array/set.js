export default (index, value) => array => {
  const newArray = array.slice();
  newArray[index] = value;
  return newArray;
};
