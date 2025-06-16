import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { thirdDerivative } from '../thirdDerivative.ts';

test('thirdDerivative', () => {
  const result = thirdDerivative(linear);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0]),
  });
});
