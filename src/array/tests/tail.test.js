import tail from '../tail';

describe('array/tail', () => {
  it('should get value from array starting from 1st till n-1th index', () => {
    const arr = [100, 200, 300];
    expect(tail(arr)).toEqual([200, 300]);
  })
})
describe('array/tail', () => {
  it('should return empty array incase of just one element', () => {
    const arr = [100];
    expect(tail(arr)).toEqual([]);
  })
})
describe('array/tail', () => {
  it('should return empty array incase of no elements in the array', () => {
    const arr = [];
    expect(tail(arr)).toEqual([]);
  })
})
