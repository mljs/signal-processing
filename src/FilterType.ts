import { AirPLSBaselineFilter } from './filters/baseline/airPLSBaseline';
import { EnsureGrowingFilter } from './filters/ensureGrowing';
import { EquallySpacedFilter } from './filters/equallySpaced';
import { FromToFilter } from './filters/fromTo';
import { CenterMeanFilter } from './filters/scaling/centerMean';
import { CenterMedianFilter } from './filters/scaling/centerMedian';
import { DivideBySDFilter } from './filters/scaling/divideBySD';
import { NormedFilter } from './filters/scaling/normed';

export type FilterType =
  | AirPLSBaselineFilter
  | CenterMeanFilter
  | CenterMedianFilter
  | DivideBySDFilter
  | EnsureGrowingFilter
  | EquallySpacedFilter
  | FromToFilter
  | NormedFilter;
