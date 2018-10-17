import call from '../callMethod';

describe('object/callMethod', () => {
  it('should call the object method and pass all arguments', () => {
    const fn = jest.fn((x, y) => x + y);
    const o = { fn };
    expect(call('fn')(1, 2)(o)).toEqual(3);
    expect(fn).toBeCalledWith(1, 2);
  });
});
