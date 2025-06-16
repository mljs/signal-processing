import type { DataXY } from 'cheminfo-types';
import { xMean } from 'ml-spectra-processing';

export interface CenterMeanFilter {
  name: 'centerMean';
}

/**
 * Center the mean
 * @param data
 */
export function centerMean(data: DataXY<Float64Array>) {
  const { y } = data;
  const mean = xMean(y);
  for (let i = 0; i < y.length; i++) {
    y[i] -= mean;
  }
  return { data };
}
