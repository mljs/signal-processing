import type { DataXY, FromTo } from 'cheminfo-types';
import { xyFilterX } from 'ml-spectra-processing';

export interface FilterXFilter {
  name: 'filterX';
  options?: FilterXOptions;
}

// TODO replace XYFilterXOptions
export interface FilterXOptions {
  /**
   * from
   * @default x[0]
   */
  from?: number;
  /**
   * to
   * @default x[x.length - 1]
   */
  to?: number;
  /**
   * number of points
   * @default []
   */
  exclusions?: FromTo[];
  /**
   * array of from / to that should be kept
   * @default [{from,to}]
   */
  zones?: FromTo[];
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function filterX(
  data: DataXY<Float64Array>,
  options: FilterXOptions = {},
) {
  return {
    data: xyFilterX(data, options),
  };
}
