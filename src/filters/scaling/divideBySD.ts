import { DataXY } from 'cheminfo-types';
import { xStandardDeviation } from 'ml-spectra-processing';

/**
 * Center the mean
 * @param data
 */
export function divideBySD(data: DataXY<Float64Array>) {
  const { y } = data;
  const sd = xStandardDeviation(y);
  for (let i = 0; i < y.length; i++) {
    y[i] /= sd;
  }
  return data;
}
