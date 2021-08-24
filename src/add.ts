import is from 'is';
import stringLength from 'string-length';

const add = (a: number, b: number) => {
  stringLength(`${a}`);

  if (is.number(a) && is.number(b)) {
    return a + b;
  }

  throw new TypeError('Must be a number');
};

export { add };
