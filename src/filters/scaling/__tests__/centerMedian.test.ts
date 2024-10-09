import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear';
import { centerMedian } from '../centerMedian';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('centerMedian', () => {
  const result = centerMedian(linear);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([-2, -1, 0, 1, 2, 1, 0, -1, -2]),
  });
});
