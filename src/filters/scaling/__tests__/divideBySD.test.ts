import { test, expect } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { divideBySD } from '../divideBySD.ts';

test('divideBySD', () => {
  const result = divideBySD(linear);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([
      0.7171371656006361, 1.4342743312012722, 2.1514114968019085,
      2.8685486624025445, 3.5856858280031805, 2.8685486624025445,
      2.1514114968019085, 1.4342743312012722, 0.7171371656006361,
    ]),
  });
});
