import type { DataXY } from 'cheminfo-types';
import { xEnsureFloat64, xyGrowingX } from 'ml-spectra-processing';

import type { FilterXYType } from './FilterXYType.ts';
import * as Filters from './filters/filters.ts';

/**
 * Apply filters on {x:[], y:[]}
 * @param data
 * @param filters
 * @returns A very important number
 */
export function filterXY(data: DataXY, filters: FilterXYType[]) {
  let result = {
    data: xyGrowingX({ x: xEnsureFloat64(data.x), y: xEnsureFloat64(data.y) }),
  };

  const logs = [];

  for (const filter of filters) {
    const start = Date.now();
    if (!filter.name) {
      continue;
    }
    const filterFct = Filters[filter.name];
    if (!filterFct) {
      throw new Error(`Unknown filter: ${filter.name}`);
    }
    // @ts-expect-error some method have options and some other ones don't have any options
    result = filterFct(result.data, filter.options);
    result.data = xyGrowingX(result.data);
    logs.push({
      name: filter.name,
      time: Date.now() - start,
    });
  }

  return { logs, data: result.data };
}
