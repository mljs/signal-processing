import { describe, it, expect } from 'vitest';

import type { FilterXYType } from '../FilterXYType.ts';
import linear from '../filters/__tests__/data/linear.ts';
import { filterXY } from '../index.ts';

describe('filterXY', () => {
  it('filters', () => {
    const filters: FilterXYType[] = [
      { name: 'centerMedian' },
      { name: 'fromTo', options: { from: 2, to: 8 } },
    ];

    const result = filterXY(linear, filters);
    expect(result.data).toStrictEqual({
      x: Float64Array.from([2, 3, 4, 5, 6, 7, 8]),
      y: Float64Array.from([-1, 0, 1, 2, 1, 0, -1]),
    });
  });

  it('reverseIfNeeded, not needed', () => {
    const filters: FilterXYType[] = [{ name: 'reverseIfNeeded' }];
    const data = {
      x: Float64Array.from([1, 2, 3, 4, 5]),
      y: Float64Array.from([1, 2, 3, 4, 1]),
    };
    const result = filterXY(data, filters);
    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3, 4, 5]),
      y: Float64Array.from([1, 2, 3, 4, 1]),
    });
  });

  it('reverseIfNeeded, needed', () => {
    const filters: FilterXYType[] = [{ name: 'reverseIfNeeded' }];
    const data = {
      x: Float64Array.from([5, 4, 3, 2, 1]),
      y: Float64Array.from([1, 2, 3, 4, 1]),
    };
    const result = filterXY(data, filters);
    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3, 4, 5]),
      y: Float64Array.from([1, 4, 3, 2, 1]),
    });
  });
});
