import head from '../head';

describe('array/head', () => {
  it('should get value from array at 0th index', () => {
    const arr = [100, 200, 300];
    expect(head(arr)).toEqual(100);
  })
})
