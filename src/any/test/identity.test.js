import identity from '../identity';

describe('any/identity', () => {
  it('should return identity', () => {
    const x = 1,
      y = { a: 5 };
    expect(identity(x)).toEqual(x);
    expect(identity(y)).toEqual(y);
  });
});
