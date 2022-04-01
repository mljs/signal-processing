import { filterXY } from '..';
import { FilterType } from '../FilterType';
import linear from '../filters/__tests__/data/linear';

describe('filterXY', () => {
  it('filters', () => {
    const filters: FilterType[] = [
      { name: 'centerMedian' },
      { name: 'fromTo', options: { from: 2, to: 8 } },
    ];

    const results = filterXY(linear, filters);
    expect(results).toStrictEqual({
      x: Float64Array.from([2, 3, 4, 5, 6, 7, 8]),
      y: Float64Array.from([-1, 0, 1, 2, 1, 0, -1]),
    });
  });
});
