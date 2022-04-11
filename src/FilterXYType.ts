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
  FilterXFilter,
} from './filters/filters';

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
  | ThirdDerivativeFilter;
