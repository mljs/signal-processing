import type { DataXY } from 'cheminfo-types';
import type { SGGOptions } from 'ml-savitzky-golay-generalized';
import { sgg } from 'ml-savitzky-golay-generalized';

export interface FirstDerivativeFilter {
  name: 'firstDerivative';
  options?: FirstDerivativeOptions;
}

export type FirstDerivativeOptions = Omit<SGGOptions, 'derivative'>;

/**
 * Calculate the first derivative using Savitzky–Golay filter.
 * @param data
 * @param options
 */
export function firstDerivative(
  data: DataXY<Float64Array>,
  options: FirstDerivativeOptions = {},
): { data: DataXY<Float64Array> } {
  const { x, y } = data;
  return { data: { x, y: sgg(y, x, { ...options, derivative: 1 }) } };
}
