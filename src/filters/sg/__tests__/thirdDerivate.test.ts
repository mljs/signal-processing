import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import linear from '../../__tests__/data/linear';
import { thirdDerivative } from '../thirdDerivative';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('thirdDerivative', () => {
  let result = thirdDerivative(linear);
  expect(result).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0]),
  });
});
