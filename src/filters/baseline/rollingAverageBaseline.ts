//@ts-expect-error no type definition for baselines
import { rollingAverageBaseline as baselineFct } from 'baselines';
import type { DataXY } from 'cheminfo-types';

export interface RollingAverageBaselineFilter {
  name: 'rollingAverageBaseline';
}

/**
 * @param data
 */
export function rollingAverageBaseline(data: DataXY<Float64Array>) {
  data.y = baselineFct(data.y).correctedSpectrum;
  return { data };
}
