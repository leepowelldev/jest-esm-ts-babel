import { add } from './add';

describe('add', () => {
  test('it should add two numbers together', () => {
    expect(add(2, 3)).toStrictEqual(5);
  });

  test('it should throw if not numbers', () => {
    // @ts-expect-error
    expect(() => add('a', 1)).toThrow('Must be a number');
  });
});
