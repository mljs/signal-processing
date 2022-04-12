import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import linear from '../../__tests__/data/linear';
import { fromTo } from '../fromTo';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('fromTo', () => {
  it('nothing to do', () => {
    const result = fromTo(linear);
    expect(result.data).toMatchCloseTo({
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
    });
  });
  it('from to', () => {
    const result = fromTo(linear, { from: 2, to: 8 });
    expect(result.data).toMatchCloseTo({
      x: [2, 3, 4, 5, 6, 7, 8],
      y: [2, 3, 4, 5, 4, 3, 2],
    });
  });
});
