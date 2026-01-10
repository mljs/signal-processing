import type { DataXY } from 'cheminfo-types';
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
 * Norm the Y values
 * @param data
 * @param options
 */
export function normed(
  data: DataXY<Float64Array>,
  options: NormedOptions = {},
): { data: DataXY<Float64Array> } {
  xNormed(data.y, { ...options, output: data.y });
  return { data };
}
