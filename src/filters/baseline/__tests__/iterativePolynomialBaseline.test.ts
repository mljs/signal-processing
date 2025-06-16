import { test, expect } from 'vitest';

import baseline from '../../__tests__/data/baseline.ts';
import { iterativePolynomialBaseline } from '../iterativePolynomialBaseline.ts';

test('iterativePolynomialBaseline', () => {
  const result = iterativePolynomialBaseline(baseline);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([
      0.3793781975600119, 0.20224002222073012, 0.07574583255802936, 0,
      3.9745504808278724, 0, 0.07574583255803824, 0.20224002222074033,
      0.3793781975600179,
    ]),
  });
});
