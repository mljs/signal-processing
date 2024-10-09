import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear';
import { thirdDerivative } from '../thirdDerivative';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('thirdDerivative', () => {
  const result = thirdDerivative(linear);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0]),
  });
});
