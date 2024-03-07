import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import linear from '../../__tests__/data/linear';
import { secondDerivative } from '../secondDerivative';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('secondDerivative', () => {
  const result = secondDerivative(linear);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([
      -0.4329004329004332, -0.4329004329004328, -0.4329004329004329,
      -0.432900432900433, -0.43290043290043306, -0.4329004329004331,
      -0.4329004329004329, -0.4329004329004329, -0.432900432900433,
    ]),
  });
});
