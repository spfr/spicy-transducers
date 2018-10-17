import entries from '../entries';

describe('object/entries', () => {
  it('should function same as Object.entries when given an object', () => {
    const o = { a: 1, b: 2 };
    expect(entries(o)).toEqual([['a', 1], ['b', 2]]);
  });

  it('should function same as Object.entries when given an unordered ArrayLike object', () => {
    const o = { 100: 'a', 2: 'b', 7: 'c' };
    expect(entries(o)).toEqual([['2', 'b'], ['7', 'c'], ['100', 'a']]);
  });

  it('should function same as Object.entries when given an Array', () => {
    const a = [100, 200, 300];
    expect(entries(a)).toEqual([['0', 100], ['1', 200], ['2', 300]]);
  });

  it('should function coerce non-objects to an object', () => {
    const s = 'foo';
    expect(entries(s)).toEqual([['0', 'f'], ['1', 'o'], ['2', 'o']]);
  });

  it('should return an empty array for primitive types', () => {
    expect(entries(100)).toEqual([]);
  });
});
