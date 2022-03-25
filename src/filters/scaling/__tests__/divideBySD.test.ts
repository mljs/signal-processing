import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { divideBySD } from '../divideBySD';

import linear from './data/linear';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('divideBySD', () => {
  const result = divideBySD(linear);
  expect(result).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([
      0.7171371656006361, 1.4342743312012722, 2.1514114968019085,
      2.8685486624025445, 3.5856858280031805, 2.8685486624025445,
      2.1514114968019085, 1.4342743312012722, 0.7171371656006361,
    ]),
  });
});
