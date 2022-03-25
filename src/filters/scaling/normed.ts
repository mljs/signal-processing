import { DataXY } from 'cheminfo-types';
import { xNormed } from 'ml-spectra-processing';

/**
 * Center the mean
 * @param data
 */
export function normed(
  data: DataXY<Float64Array>,
  options: {
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
  } = {},
) {
  xNormed(data.y, { ...options, output: data.y });
  return data;
}
