import type { DoubleMatrix } from 'ml-spectra-processing';
import { matrixPQN } from 'ml-spectra-processing';

export interface PQNFilter {
  name: 'pqn';
  options?: PQNOptions;
}

export type PQNOptions = Omit<
  Exclude<Parameters<typeof matrixPQN>[1], undefined>,
  'output'
>;

export function pqn(matrix: DoubleMatrix, options: PQNOptions = {}) {
  const data = matrixPQN(matrix, { ...options });
  return { data };
}
