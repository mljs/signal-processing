import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { ensureGrowing } from '../ensureGrowing';

import linear from './data/nonGrowing';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('ensureGrowing', () => {
  it('nothing to do', () => {
    const result = ensureGrowing(linear);
    expect(result).toMatchCloseTo({
      x: [1, 3, 5, 6, 7, 8, 9],
      y: [1, 3, 5, 4, 3, 2, 1],
    });
  });
});
