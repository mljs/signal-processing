import { DataXY } from 'cheminfo-types';
import { xMedian } from 'ml-spectra-processing';

/**
 * Center the median
 * @param data
 */
export function centerMedian(data: DataXY<Float64Array>) {
  const { y } = data;
  const median = xMedian(y);
  for (let i = 0; i < y.length; i++) {
    y[i] -= median;
  }
  return data;
}
