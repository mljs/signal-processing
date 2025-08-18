import { describe, expect, it } from 'vitest';

import { setMaxY } from '../setMaxY.ts';

describe('setMaxY', () => {
  it('default values', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMaxY(data, {});

    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3]),
      y: new Float64Array([-1, 0, 1]),
    });
    expect(result.data).not.toBe(data);
  });

  it('nothing to do', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMaxY(data, { max: 4 });

    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3]),
      y: new Float64Array([2, 3, 4]),
    });
    expect(result.data).toBe(data);
  });

  it('negative value', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMaxY(data, { max: -1 });

    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3]),
      y: new Float64Array([-3, -2, -1]),
    });
  });
});
