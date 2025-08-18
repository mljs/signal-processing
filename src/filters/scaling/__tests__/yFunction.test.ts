import { describe, expect, it } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { yFunction } from '../yFunction.ts';

describe('yFunction', () => {
  it('nothing to do', () => {
    const result = yFunction(linear, {});

    expect(result.data).toMatchCloseTo({
      y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
    });
  });

  it('y+2', () => {
    const result = yFunction(linear, {
      function: 'y+2',
    });

    expect(result.data).toMatchCloseTo({
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [3, 4, 5, 6, 7, 6, 5, 4, 3],
    });
  });

  it('pow(y,2)', () => {
    const result = yFunction(linear, {
      function: 'pow(y,2)',
    });

    expect(result.data).toMatchCloseTo({
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [1, 4, 9, 16, 25, 16, 9, 4, 1],
    });
  });
});
