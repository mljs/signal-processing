import { DataXY } from 'cheminfo-types';
import { xEnsureFloat64 } from 'ml-spectra-processing';

interface Filter {
  name: string;
  options: any;
}

/**
 * Apply filters on {x:[], y:[]}
 * @returns A very important number
 */
export function filterXY(
  data: DataXY,
  filters: Filter[],
): DataXY<Float64Array> {
  let result = { x: xEnsureFloat64(data.x), y: xEnsureFloat64(data.y) };

  for (let filter of filters) {
  }

  return result;
}
