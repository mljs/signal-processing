import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { rescale } from '../rescale.ts';

test('rescale', () => {
  const result = rescale(linear, { min: 1, max: 2 });
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([1, 1.25, 1.5, 1.75, 2, 1.75, 1.5, 1.25, 1]),
  });
});
