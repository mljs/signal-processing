import { DataXY } from 'cheminfo-types';
import { sgg, SGGOptions } from 'ml-savitzky-golay-generalized';

export interface SecondDerivativeFilter {
  name: 'secondDerivative';
  options?: SecondDerivativeOptions;
}

export type SecondDerivativeOptions = Omit<SGGOptions, 'derivative'>;

/**
 * Calculate the second derivative using Savitzky–Golay filter.
 * @param data
 */
export function secondDerivative(
  data: DataXY<Float64Array>,
  options: SecondDerivativeOptions = {},
) {
  const { x, y } = data;
  return { x, y: sgg(y, x, { ...options, derivative: 2 }) };
}
