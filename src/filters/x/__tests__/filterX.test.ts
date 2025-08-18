import { describe, expect, it } from 'vitest';

import linear from '../../__tests__/data/linear.ts';
import { filterX } from '../filterX.ts';

describe('filterX', () => {
  it('nothing to do', () => {
    const result = filterX(linear, {
      exclusions: [{ from: 2, to: 7 }],
    });

    expect(result.data).toMatchCloseTo({
      x: [1, 2, 7, 8, 9],
      y: [1, 2, 3, 2, 1],
    });
  });
});
