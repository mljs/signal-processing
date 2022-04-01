import { filterXY } from '..';
import { FilterType } from '../FilterType';
import linear from '../filters/__tests__/data/linear';

describe('filterXY', () => {
  it('filters', () => {
    const filters: FilterType[] = [
      { name: 'median' },
      { name: 'fromTo', options: { from: 2, to: 8 } },
    ];

    const results = filterXY(linear, filters);
    console.log(results);
  });
});
