import { DataXY } from 'cheminfo-types';
import { sgg, SGGOptions } from 'ml-savitzky-golay-generalized';

export interface FirstDerivativeFilter {
  name: 'firstDerivative';
  options?: FirstDerivativeOptions;
}

export type FirstDerivativeOptions = Omit<SGGOptions, 'derivative'>;

/**
 * Calculate the first derivative using Savitzky–Golay filter.
 * @param data
 */
export function firstDerivative(
  data: DataXY<Float64Array>,
  options: FirstDerivativeOptions = {},
) {
  const { x, y } = data;
  return { x, y: sgg(y, x, { ...options, derivative: 1 }) };
}
