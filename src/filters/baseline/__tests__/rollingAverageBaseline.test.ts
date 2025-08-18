import { expect, test } from 'vitest';

import baseline from '../../__tests__/data/baseline.ts';
import { rollingAverageBaseline } from '../rollingAverageBaseline.ts';

test('rollingAverageBaseline', () => {
  const result = rollingAverageBaseline(baseline);

  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 2, -2, 0, 0, 0]),
  });
});
