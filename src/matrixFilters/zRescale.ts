import { matrixZRescale, DoubleMatrix } from 'ml-spectra-processing';

export interface MatrixZRescaleFilter {
  name: 'matrixZRecale';
  options?: RescaleOptions;
}

export type RescaleOptions = Parameters<typeof matrixZRescale>[1];

/**
 * Norm the Y values
 * @param data
 */
export function zRescale(matrix: DoubleMatrix, options: RescaleOptions = {}) {
  const data = matrixZRescale(matrix, { ...options });
  return { data };
}
