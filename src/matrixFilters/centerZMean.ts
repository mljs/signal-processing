import { matrixCenterZMean, DoubleMatrix } from 'ml-spectra-processing';

export interface MatrixCenterZMeanFilter {
  name: 'matrixCenterZMean';
}

/**
 * Norm the Y values
 * @param data
 */
export function centerZMean(matrix: DoubleMatrix) {
  const data = matrixCenterZMean(matrix);
  return { data };
}
