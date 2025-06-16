import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { normed } from '../normed.ts';

test('normed', () => {
  const result = normed(linear, { algorithm: 'max', value: 10 });
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([2, 4, 6, 8, 10, 8, 6, 4, 2]),
  });
});
