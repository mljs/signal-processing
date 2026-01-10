import type { DataXY } from 'cheminfo-types';
import type { SGGOptions } from 'ml-savitzky-golay-generalized';
import { sgg } from 'ml-savitzky-golay-generalized';

export interface SecondDerivativeFilter {
  name: 'secondDerivative';
  options?: SecondDerivativeOptions;
}

export type SecondDerivativeOptions = Omit<SGGOptions, 'derivative'>;

/**
 * Calculate the second derivative using Savitzky–Golay filter.
 * @param data
 * @param options
 */
export function secondDerivative(
  data: DataXY<Float64Array>,
  options: SecondDerivativeOptions = {},
): { data: DataXY<Float64Array> } {
  const { x, y } = data;
  return { data: { x, y: sgg(y, x, { ...options, derivative: 2 }) } };
}
