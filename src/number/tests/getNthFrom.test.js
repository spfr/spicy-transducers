import getNth from '../getNthFrom';

describe('number/getNthFrom', () => {
  it('should get the nth index from an array', () => {
    const arr = [1, 'foo', 'bar'];
    expect(getNth(arr)(1)).toEqual('foo');
  });
});
