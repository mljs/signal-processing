import type {
  AirPLSBaselineFilter,
  CenterMeanFilter,
  CenterMedianFilter,
  DivideBySDFilter,
  EnsureGrowingFilter,
  EquallySpacedFilter,
  FirstDerivativeFilter,
  IterativePolynomialBaselineFilter,
  FromToFilter,
  NormedFilter,
  RescaleFilter,
  RollingAverageBaselineFilter,
  RollingBallBaselineFilter,
  RollingMedianBaselineFilter,
  SavitzkyGolayFilter,
  SecondDerivativeFilter,
  ThirdDerivativeFilter,
  FilterXFilter,
  XFunctionFilter,
  YFunctionFilter,
  CalibrateFilter,
  ParetoNormalizationFilter,
} from './filters/filters.ts';
import type { ReverseIfNeededFilter } from './filters/x/reverseIfNeeded.ts';

export type FilterXYType =
  | AirPLSBaselineFilter
  | CenterMeanFilter
  | CenterMedianFilter
  | DivideBySDFilter
  | EnsureGrowingFilter
  | EquallySpacedFilter
  | FirstDerivativeFilter
  | FilterXFilter
  | FromToFilter
  | IterativePolynomialBaselineFilter
  | NormedFilter
  | RescaleFilter
  | RollingAverageBaselineFilter
  | RollingBallBaselineFilter
  | RollingMedianBaselineFilter
  | SavitzkyGolayFilter
  | SecondDerivativeFilter
  | ThirdDerivativeFilter
  | XFunctionFilter
  | YFunctionFilter
  | CalibrateFilter
  | ParetoNormalizationFilter
  | ReverseIfNeededFilter;
