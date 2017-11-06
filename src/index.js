export const method = name => (...args) => obj => obj[name](...args);

export const transform = transformation => value => transformation(value);

export const chain = (...transformations) => value =>
  transformations.reduce(
    (result, transformation) => transformation(result),
    value
  );

export const identity = value => value;
