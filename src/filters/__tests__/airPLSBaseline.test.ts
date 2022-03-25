import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { airPLSBaseline } from '../airPLSBaseline';

import baseline from './data/baseline';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('airPLSBaseline', () => {
  const result = airPLSBaseline(baseline);
  expect(result).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 4, 0, 0, 0, 0]),
  });
});
