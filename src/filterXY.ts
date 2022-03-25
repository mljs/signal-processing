import { DataXY } from 'cheminfo-types';
import { xEnsureFloat64 } from 'ml-spectra-processing';

import { FilterType } from './FilterType';
import * as Filters from './filters/filters';

/**
 * Apply filters on {x:[], y:[]}
 * @returns A very important number
 */
export function filterXY(
  data: DataXY,
  filters: FilterType[],
): DataXY<Float64Array> {
  let result = { x: xEnsureFloat64(data.x), y: xEnsureFloat64(data.y) };

  for (let filter of filters) {
    if (!Filters[filter.name]) {
      throw new Error(`Unknown filter: ${filter.name}`);
    }
    result = Filters[filter.name](result, filter.options);
  }

  return result;
}
