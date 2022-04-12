import { DataXY, FromTo } from 'cheminfo-types';
import { xyEquallySpaced } from 'ml-spectra-processing';

export interface EquallySpacedFilter {
  name: 'equallySpaced';
  options?: EquallySpacedOptions;
}

// TODO replace XYEquallySpacedOptions
export interface EquallySpacedOptions {
  /** from
   * @default x[0]
   */
  from?: number;
  /** to
   * @default x[x.length - 1]
   */
  to?: number;
  /** number of points
   * @default 100
   */
  numberOfPoints?: number;
  /** number of points
   * @default []
   */
  exclusions?: FromTo[];
  /** array of from / to that should be kept
   * @default [{from,to}]
   */
  zones?: FromTo[];
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function equallySpaced(
  data: DataXY<Float64Array>,
  options: EquallySpacedOptions = {},
) {
  return { data: xyEquallySpaced(data, options) };
}
