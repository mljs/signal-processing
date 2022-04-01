import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { fromTo } from '../fromTo';

import linear from './data/linear';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('fromTo', () => {
  it('nothing to do', () => {
    const result = fromTo(linear);
    expect(result).toMatchCloseTo({
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
    });
  });
  it('from to', () => {
    const result = fromTo(linear, { from: 2, to: 8 });
    expect(result).toMatchCloseTo({
      x: [2, 3, 4, 5, 6, 7, 8],
      y: [2, 3, 4, 5, 4, 3, 2],
    });
  });
});
