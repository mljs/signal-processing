import type { DataXY } from 'cheminfo-types';
import type { SGGOptions } from 'ml-savitzky-golay-generalized';
import { sgg } from 'ml-savitzky-golay-generalized';

export interface ThirdDerivativeFilter {
  name: 'thirdDerivative';
  options?: ThirdDerivativeOptions;
}

export type ThirdDerivativeOptions = Omit<SGGOptions, 'derivative'>;

/**
 * Calculate the third derivative using Savitzky–Golay filter.
 * @param data
 * @param options
 */
export function thirdDerivative(
  data: DataXY<Float64Array>,
  options: ThirdDerivativeOptions = {},
): { data: DataXY<Float64Array> } {
  const { x, y } = data;
  return { data: { x, y: sgg(y, x, { ...options, derivative: 3 }) } };
}
