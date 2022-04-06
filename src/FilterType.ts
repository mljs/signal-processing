import {
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
} from './filters/filters';

export type FilterType =
  | AirPLSBaselineFilter
  | CenterMeanFilter
  | CenterMedianFilter
  | DivideBySDFilter
  | EnsureGrowingFilter
  | EquallySpacedFilter
  | FirstDerivativeFilter
  | FromToFilter
  | IterativePolynomialBaselineFilter
  | NormedFilter
  | RescaleFilter
  | RollingAverageBaselineFilter
  | RollingBallBaselineFilter
  | RollingMedianBaselineFilter
  | SavitzkyGolayFilter
  | SecondDerivativeFilter
  | ThirdDerivativeFilter;
