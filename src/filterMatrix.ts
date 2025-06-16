import type { DoubleMatrix } from 'ml-spectra-processing';

import type { FilterMatrixType } from './FilterMatrixType.ts';

// eslint-disable-next-line jsdoc/require-jsdoc
export function filterMatrix(
  matrix: DoubleMatrix,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filters: FilterMatrixType[],
) {
  const result = {
    data: matrix,
  };

  const logs: any = [];

  /**
   * todo
   * for (let filter of filters) {
   * const start = Date.now();
   * // eslint-disable-next-line import/namespace
   * const filterFct = Filters[filter.name];
   * if (!filterFct) {
   * throw new Error(`Unknown filter: ${filter.name}`);
   * }
   * result = filterFct(result.data, filter.options);
   * logs.push({
   * name: filter.name,
   * time: Date.now() - start,
   * });
   * }
   */

  return { logs, data: result.data };
}
