import constants from '../constant';

describe('any/constants', () => {
  it('should return itself when called, even if we mutate the original value', () => {
    let x = 1;
    const y = constants(x);
    expect(y()).toEqual(x);
    x = {};
    expect(y()).not.toBe(x);
  });
});
