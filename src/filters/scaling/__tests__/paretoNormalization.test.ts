import { test, expect } from 'vitest';

import { paretoNormalization } from '../paretoNormalization.ts';

test('paretoNormalization', () => {
  const data = {
    x: Float64Array.from([2, 3, 4]),
    y: Float64Array.from([2, 1, 2]),
  };

  const result = paretoNormalization(data);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([2, 3, 4]),
    y: Float64Array.from([
      2.6321480259049848, 1.3160740129524924, 2.6321480259049848,
    ]),
  });
});
