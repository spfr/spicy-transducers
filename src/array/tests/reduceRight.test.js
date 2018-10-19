import reduceRight from '../reduceRight';

describe('array/reduceRight', () => {
  it('uses the built in array reduceRight method', () => {
    const input = [10, 12, 14, 15];
    const defaultValue = 100;
    const expected = 151;
    const reduceFn = (acc, _) => acc + _;

    expect(reduceRight(reduceFn, defaultValue)(input)).toEqual(expected);
  });
});
