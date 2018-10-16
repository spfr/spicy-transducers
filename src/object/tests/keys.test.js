import keys from '../keys';

describe('object/keys', () => {
  it('should function same as Object.keys when given an ordered ArrayLike object', () => {
    const o = { a: 1, b: 2, c: 3 };
    expect(keys(o)).toEqual(['a', 'b', 'c']);
  });
  it('should function same as Object.keys when given an unordered ArrayLike object', () => {
    const o = { 100: 'a', 6: 'b', 2: 'c' };
    expect(keys(o)).toEqual(['2', '6', '100']);
  });
  it('should function same as Object.keys when given an Array', () => {
    const a = ['a', 'b', 'c'];
    expect(keys(a)).toEqual(['0', '1', '2']);
  });
});
