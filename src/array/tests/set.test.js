import set from '../set';

describe('array/set', () => {
  it('sets an element at the nth index of the array; no mutations – returns a new array', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = set(2, 100)(arr1);
    expect(arr2).toEqual([1, 2, 100, 4]);
    expect(arr1).toEqual([1, 2, 3, 4]);
  });
});
