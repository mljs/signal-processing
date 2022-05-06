import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { calibrateX } from '../calibrateX';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('calibrateX', () => {
  it('undefined params', () => {
    let data = {
      x: Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      y: Float64Array.from([1, 1, 1, 1, 1, 1, 700, 1, 1, 1, 1, 1, 1]),
    };

    let shifted = calibrateX(data);
    expect(shifted.data.x).toMatchCloseTo(
      Float64Array.from([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]),
    );
    expect(shifted.data.y).toStrictEqual(data.y);
  });

  it('too small data', () => {
    let data = {
      x: Float64Array.from([0, 1, 2, 3]),
      y: Float64Array.from([1, 1, 5, 1]),
    };
    expect(() => calibrateX(data, { from: 1, to: 10 })).toThrow(
      'Window size is higher than the data lengt',
    );
  });

  it('no shift', () => {
    let data = {
      x: Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      y: Float64Array.from([1, 1, 5, 1, 1, 1, 700, 1, 1, 1, 1, 1, 1]),
    };

    let gsdOptions = {
      minMaxRatio: 0.4,
      realTopDetection: true,
      smoothY: true,
      sgOptions: {
        windowSize: 5,
        polynomial: 3,
      },
    };

    let shifted = calibrateX(data, {
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
    let data = {
      x: Float64Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      y: Float64Array.from([1, 1, 1, 1, 700, 1, 5, 1, 1, 1, 1, 1, 1]),
    };

    let gsdOptions = {
      minMaxRatio: 0.4,
      realTopDetection: true,
      smoothY: true,
      sgOptions: {
        windowSize: 5,
        polynomial: 3,
      },
    };

    let shifted = calibrateX(data, {
      targetX: 6,
      gsd: gsdOptions,
      from: 1,
      to: 10,
    });
    // because we look for the real maximum it is not exactly 2
    expect(shifted.data.x).toMatchCloseTo(
      Float64Array.from([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    );
    expect(shifted.data.y).toStrictEqual(data.y);
  });
});
