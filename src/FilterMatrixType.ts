import { MatrixCenterZMeanFilter } from './matrixFilters/centerZMean';
import { PQNFilter } from './matrixFilters/pqn';
import { MatrixZRescaleFilter } from './matrixFilters/zRescale';

export type FilterMatrixType =
  | MatrixCenterZMeanFilter
  | PQNFilter
  | MatrixZRescaleFilter;
