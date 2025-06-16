import { describe, it, expect } from 'vitest';

import { setMinX } from '../setMinX.ts';

describe('setMinX', () => {
  it('default values', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMinX(data, {});
    expect(result.data).toStrictEqual({
      x: Float64Array.from([0, 1, 2]),
      y: Float64Array.from([2, 3, 4]),
    });
    expect(result.data).not.toBe(data);
  });

  it('nothing to do', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMinX(data, { min: 1 });
    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    });
    expect(result.data).toBe(data);
  });

  it('negative value', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMinX(data, { min: -1 });
    expect(result.data).toStrictEqual({
      x: Float64Array.from([-1, 0, 1]),
      y: Float64Array.from([2, 3, 4]),
    });
  });
});
