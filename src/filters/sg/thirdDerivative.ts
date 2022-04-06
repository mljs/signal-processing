import { DataXY } from 'cheminfo-types';
import { sgg, SGGOptions } from 'ml-savitzky-golay-generalized';

export interface ThirdDerivativeFilter {
  name: 'thirdDerivative';
  options?: ThirdDerivativeOptions;
}

export type ThirdDerivativeOptions = Omit<SGGOptions, 'derivative'>;

/**
 * Calculate the third derivative using Savitzky–Golay filter.
 * @param data
 */
export function thirdDerivative(
  data: DataXY<Float64Array>,
  options: ThirdDerivativeOptions = {},
) {
  const { x, y } = data;
  return { x, y: sgg(y, x, { ...options, derivative: 3 }) };
}
