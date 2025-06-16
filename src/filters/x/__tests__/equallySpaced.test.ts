import { describe, it, expect } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { equallySpaced } from '../equallySpaced.ts';

describe('equallySpaced', () => {
  it('nothing to do', () => {
    const result = equallySpaced(linear, {
      exclusions: [{ from: 2, to: 7 }],
      numberOfPoints: 5,
    });
    expect(result.data).toMatchCloseTo({
      x: [1, 2, 7, 8, 9],
      y: [1, 2, 3, 2, 1],
    });
  });
});
