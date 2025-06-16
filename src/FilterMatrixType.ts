import type { MatrixCenterZMeanFilter } from './matrixFilters/centerZMean.ts';
import type { PQNFilter } from './matrixFilters/pqn.ts';
import type { MatrixZRescaleFilter } from './matrixFilters/zRescale.ts';

export type FilterMatrixType =
  | MatrixCenterZMeanFilter
  | PQNFilter
  | MatrixZRescaleFilter;
