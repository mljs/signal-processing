import type { DoubleMatrix } from 'cheminfo-types';
import { matrixCenterZMean } from 'ml-spectra-processing';

export interface MatrixCenterZMeanFilter {
  name: 'matrixCenterZMean';
}

/**
 * Norm the Y values
 * @param data
 * @param matrix
 */
export function centerZMean(matrix: DoubleMatrix) {
  const data = matrixCenterZMean(matrix);
  return { data };
}
