import { describe, expect, it } from 'vitest';

import { calibrateX } from '../calibrateX.ts';

describe('calibrateX', () => {
  it('undefined params', () => {
    const data = {
      x: Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      y: Float64Array.from([1, 1, 1, 1, 1, 1, 700, 1, 1, 1, 1, 1, 1]),
    };

    const shifted = calibrateX(data);

    expect(shifted.data.x).toMatchCloseTo(
      Float64Array.from([-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]),
    );
    expect(shifted.data.y).toStrictEqual(data.y);
  });

  it('too small data', () => {
    const data = {
      x: Float64Array.from([0, 1, 2, 3]),
      y: Float64Array.from([1, 1, 5, 1]),
    };

    expect(() => calibrateX(data, { from: 1, to: 10 })).toThrow(
      'Window size is higher than the data lengt',
    );
  });

  it('no shift', () => {
    const data = {
      x: Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      y: Float64Array.from([1, 1, 5, 1, 1, 1, 700, 1, 1, 1, 1, 1, 1]),
    };

    const gsdOptions = {
      minMaxRatio: 0.4,
      realTopDetection: true,
      smoothY: true,
      sgOptions: {
        windowSize: 5,
        polynomial: 3,
      },
    };

    const shifted = calibrateX(data, {
      from: 1,
      to: 10,
      targetX: 6,
      gsd: gsdOptions,
    });

    expect(shifted.data.x).toMatchCloseTo(
      Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    );
    expect(shifted.data.y).toStrictEqual(data.y);
  });

  it('shift of 2', () => {
    const data = {
      x: Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      y: Float64Array.from([1, 1, 1, 1, 700, 1, 5, 1, 1, 1, 1, 1, 1]),
    };

    const gsdOptions = {
      minMaxRatio: 0.4,
      realTopDetection: true,
      smoothY: true,
      sgOptions: {
        windowSize: 5,
        polynomial: 3,
      },
    };

    const shifted = calibrateX(data, {
      targetX: 6,
      gsd: gsdOptions,
      from: 1,
      to: 10,
    });

    // because we look for the real maximum it is not exactly 2
    expect(shifted.data.x).toMatchCloseTo(
      Float64Array.from([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
    );
    expect(shifted.data.y).toStrictEqual(
      Float64Array.from([1, 1, 1, 1, 700, 1, 5, 1, 1, 1, 1, 1, 1]),
    );
  });

  it('2 peaks', () => {
    const data = {
      x: Float64Array.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
      ]),
      y: Float64Array.from([
        1, 1, 1, 1, 1, 700, 1, 1, 1, 1, 1, 1, 1, 1, 1, 700, 1, 1, 1, 1, 1,
      ]),
    };

    const gsdOptions = {
      minMaxRatio: 0.4,
      realTopDetection: true,
      smoothY: true,
      sgOptions: {
        windowSize: 5,
        polynomial: 3,
      },
    };

    const shifted = calibrateX(data, {
      targetX: 6,
      gsd: gsdOptions,
      nbPeaks: 2,
    });

    // because we look for the real maximum it is not exactly 2
    expect(shifted.data.x).toMatchCloseTo(
      Float64Array.from([
        -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16,
      ]),
    );
    expect(shifted.data.y).toStrictEqual(
      Float64Array.from([
        1, 1, 1, 1, 1, 700, 1, 1, 1, 1, 1, 1, 1, 1, 1, 700, 1, 1, 1, 1, 1,
      ]),
    );
  });
});
