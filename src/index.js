export const method = name => (...args) => value => value[name](...args);

export const transform = transformation => (...values) =>
  transformation(...values);

export const chain = (...transformations) => value =>
  transformations.reduce(
    (result, transformation) => transformation(result),
    value
  );

export const identity = value => value;
