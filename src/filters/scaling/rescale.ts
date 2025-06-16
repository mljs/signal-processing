import type { DataXY } from 'cheminfo-types';
import { xRescale } from 'ml-spectra-processing';

export interface RescaleFilter {
  name: 'rescale';
  options?: RescaleOptions;
}

export type RescaleOptions = Omit<
  Exclude<Parameters<typeof xRescale>[1], undefined>,
  'output'
>;

/**
 * Center the mean
 * @param data
 * @param options
 */
export function rescale(
  data: DataXY<Float64Array>,
  options: RescaleOptions = {},
) {
  xRescale(data.y, { ...options, output: data.y });
  return { data };
}
