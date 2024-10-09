import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear';
import { centerMean } from '../centerMean';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('centerMean', () => {
  const result = centerMean(linear);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([
      -1.7777777777777777, -0.7777777777777777, 0.22222222222222232,
      1.2222222222222223, 2.2222222222222223, 1.2222222222222223,
      0.22222222222222232, -0.7777777777777777, -1.7777777777777777,
    ]),
  });
});
