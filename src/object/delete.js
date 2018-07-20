export default key => object => {
  const newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
};
