import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { describe, it, expect } from 'vitest';

import linear from '../../__tests__/data/linear';
import { filterX } from '../filterX';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

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
