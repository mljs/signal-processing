import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear';
import { savitzkyGolay } from '../savitzkyGolay';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('savitzkyGolay', () => {
  const result = savitzkyGolay(linear, {
    derivative: 1,
  });
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([
      1.731601731601732, 1.2987012987012991, 0.8658008658008661,
      0.43290043290043306, 0, -0.4329004329004331, -0.8658008658008661,
      -1.2987012987012991, -1.7316017316017325,
    ]),
  });
});
