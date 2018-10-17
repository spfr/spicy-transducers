import values from '../values';

describe('object/values', () => {
  it('should function same as Object.values when given an object', () => {
    const o = { a: 1, b: 2, c: 3 };
    expect(values(o)).toEqual([1, 2, 3]);
  });

  it('should function same as Object.values when given an unordered ArrayLike object', () => {
    const o = { 100: 3, 50: 1, 67: 2 };
    expect(values(o)).toEqual([1, 2, 3]);
  });

  it('should return the array itself when given one (like Object.values)', () => {
    const a = ['a', 'b', 'c'];
    expect(values(a)).toEqual(a);
  });

  it('should turn string into array of chars (like Object.values)', () => {
    const s = 'bar';
    expect(values(s)).toEqual(['b', 'a', 'r']);
  });
});
