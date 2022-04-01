import { DataXY } from 'cheminfo-types';
import { xNormed } from 'ml-spectra-processing';

export interface NormedFilter {
  name: 'normed';
  options?: NormedOptions;
}

export type NormedOptions = Omit<
  Exclude<Parameters<typeof xNormed>[1], undefined>,
  'output'
>;

/**
 * Center the mean
 * @param data
 */
export function normed(
  data: DataXY<Float64Array>,
  options: NormedOptions = {},
) {
  xNormed(data.y, { ...options, output: data.y });
  return data;
}
