import reduce from '../reduce';

describe('array/reduce', () => {
  it('uses the built in array reduce method', () => {
    const input = [0, 1, 2, 3];
    const defaultValue = 10;
    const expected = 16;
    const reduceFn = (acc, _) => acc + _;

    expect(reduce(reduceFn, defaultValue)(input)).toEqual(expected);
  });
});
