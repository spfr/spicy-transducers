import last from '../last';

describe('array/last', () => {
  it('should get value from array at n-1th index', () => {
    const arr = [100, 200, 300];
    expect(last(arr)).toEqual(300);
  })
})
