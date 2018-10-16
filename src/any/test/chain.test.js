import chain from '../chain';
import map from '../../array/map';
import reduce from '../../array/reduce';
import values from '../../object/values';

describe('any/chain', () => {
  it('chains n operations and reduces them', () => {
    const r1 = _ => (_ > 0 ? _ : 1);
    const r2 = _ => _ * 100;

    const result = chain(r1, r2)(0);
    expect(result).toEqual(100);
  });

  it('integrates well with other spicy methods', () => {
    const sales = {
      q1: 33,
      q2: 12,
      q3: 40,
      q4: 65,
    };
    const toPrice = _ => _ * 99.99;
    const add = (acc, _) => acc + _;
    const expected = 14998.5;

    const result = chain(values, map(toPrice), reduce(add, 0))(sales);

    expect(result).toEqual(expected);
  });
});
