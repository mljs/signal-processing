import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { describe, it, expect } from 'vitest';

import linear from '../../__tests__/data/linear';
import { xFunction } from '../xFunction';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('xFunction', () => {
  it('nothing to do', () => {
    const result = xFunction(linear, {});
    expect(result.data).toMatchCloseTo({
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
    });
  });
  it('x+2', () => {
    const result = xFunction(linear, {
      function: 'x+2',
    });
    expect(result.data).toMatchCloseTo({
      x: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
    });
  });
  it('pow(x,2)', () => {
    const result = xFunction(linear, {
      function: 'pow(x,2)',
    });
    expect(result.data).toMatchCloseTo({
      x: [1, 4, 9, 16, 25, 36, 49, 64, 81],
      y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
    });
  });
});
