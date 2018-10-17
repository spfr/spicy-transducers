import update from '../update';

describe('object/update', () => {
  it('should update an object’s value via a function and return a new object', () => {
    const first = { a: 1 };
    const second = update('a', a => a + 1)(first);
    expect(first.a).toEqual(1);
    expect(second.a).toEqual(2);
  });
});
