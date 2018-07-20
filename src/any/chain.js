export default (...operations) => value =>
  operations.reduce((acc, operation) => operation(acc), value);
