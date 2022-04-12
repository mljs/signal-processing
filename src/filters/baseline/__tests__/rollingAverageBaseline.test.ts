import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import baseline from '../../__tests__/data/baseline';
import { rollingAverageBaseline } from '../rollingAverageBaseline';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('rollingAverageBaseline', () => {
  const result = rollingAverageBaseline(baseline);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 2, -2, 0, 0, 0]),
  });
});
