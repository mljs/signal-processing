import { DataXY } from 'cheminfo-types';
import { sgg, SGGOptions } from 'ml-savitzky-golay-generalized';

export interface SavitzkyGolayFilter {
  name: 'savitzkyGolay';
  options?: SavitzkyGolayOptions;
}

export type SavitzkyGolayOptions = SGGOptions;

/**
 * Apply the Savitzky Golay Generalized Filter
 * @param data
 * @param options
 */
export function savitzkyGolay(
  data: DataXY<Float64Array>,
  options: SavitzkyGolayOptions = {},
) {
  const { x, y } = data;
  return { data: { x, y: sgg(y, x, options) } };
}
