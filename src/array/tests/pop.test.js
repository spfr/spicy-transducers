import pop from '../pop';

describe('array/pop', () => {
  it('pops the first element and returns the rest of the array', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = pop(arr1);
    expect(arr2).toEqual([2, 3, 4]);
    expect(arr1).toEqual([1, 2, 3, 4]);
  });
});
