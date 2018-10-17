import push from '../push';

describe('array/push', () => {
  it('adds an element to head of the array; returns a new array', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = push(10)(arr1);
    expect(arr2).toEqual([10, 1, 2, 3, 4]);
    expect(arr1).toEqual([1, 2, 3, 4]);
  });
});
