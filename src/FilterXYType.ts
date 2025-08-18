import type {
  AirPLSBaselineFilter,
  CalibrateFilter,
  CenterMeanFilter,
  CenterMedianFilter,
  DivideBySDFilter,
  EnsureGrowingFilter,
  EquallySpacedFilter,
  FilterXFilter,
  FirstDerivativeFilter,
  FromToFilter,
  IterativePolynomialBaselineFilter,
  NormedFilter,
  ParetoNormalizationFilter,
  RescaleFilter,
  RollingAverageBaselineFilter,
  RollingBallBaselineFilter,
  RollingMedianBaselineFilter,
  SavitzkyGolayFilter,
  SecondDerivativeFilter,
  ThirdDerivativeFilter,
  XFunctionFilter,
  YFunctionFilter,
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
