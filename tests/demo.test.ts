import test from 'ava';
import { demo } from '../src/index.js';

test.serial('It should pass', (t) => {
  const expected = 'some thing';
  const response = demo();
  t.is(response, expected);
});
