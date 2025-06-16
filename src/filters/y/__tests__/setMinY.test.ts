import { describe, it, expect } from 'vitest';

import { setMinY } from '../setMinY.ts';

describe('setMinY', () => {
  it('default values', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMinY(data, {});
    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3]),
      y: new Float64Array([0, 1, 2]),
    });
    expect(result.data).not.toBe(data);
  });

  it('nothing to do', () => {
    const data = {
      x: Float64Array.from([1, 2, 3]),
      y: Float64Array.from([2, 3, 4]),
    };
    const result = setMinY(data, { min: 2 });
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
    const result = setMinY(data, { min: -1 });
    expect(result.data).toStrictEqual({
      x: Float64Array.from([1, 2, 3]),
      y: new Float64Array([-1, 0, 1]),
    });
  });
});
