import { DataXY } from 'cheminfo-types';
import { xyEquallySpaced } from 'ml-spectra-processing';

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
  /** array of from / to that should be skipped for the generation of the points
   * @default []
   */
  exclusions?: {
    from: number;
    to: number;
  }[];
  /** array of from / to that should be kept
   * @default []
   */
  zones?: {
    from: number;
    to: number;
  }[];
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
  return xyEquallySpaced(data, options);
}
