import { DataXY } from 'cheminfo-types';
import { xNormed } from 'ml-spectra-processing';

export interface NormedFilter {
  name: 'normed';
  options?: NormedOptions;
}

export interface NormedOptions {
  /** value by which to divide the data
   * @default 'absolute'
   */
  algorithm?: string;
  /** sum value
   * @default 1
   */
  sumValue?: number;
  /** max value
   * @default 1
   */
  maxValue?: number;
}

/**
 * Center the mean
 * @param data
 */
export function normed(
  data: DataXY<Float64Array>,
  options: NormedOptions = {},
) {
  xNormed(data.y, { ...options, output: data.y });
  return data;
}
