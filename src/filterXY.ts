import { DataXY } from 'cheminfo-types';
import { xEnsureFloat64 } from 'ml-spectra-processing';

import { FilterXYType } from './FilterXYType';
import * as Filters from './filters/filters';

/**
 * Apply filters on {x:[], y:[]}
 * @returns A very important number
 */
export function filterXY(data: DataXY, filters: FilterXYType[]) {
  let result = {
    data: { x: xEnsureFloat64(data.x), y: xEnsureFloat64(data.y) },
  };

  const logs = [];

  for (let filter of filters) {
    const start = Date.now();
    const filterFct = Filters[filter.name];
    if (!filterFct) {
      throw new Error(`Unknown filter: ${filter.name}`);
    }
    // @ts-expect-error some method have options and some other ones don't have any options
    result = filterFct(result.data, filter.options);
    logs.push({
      name: filter.name,
      time: Date.now() - start,
    });
  }

  return { logs, data: result.data };
}
