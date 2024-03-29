//@ts-expect-error no type definition for baselines
import { rollingMedianBaseline as baselineFct } from 'baselines';
import { DataXY } from 'cheminfo-types';

export interface RollingMedianBaselineFilter {
  name: 'rollingMedianBaseline';
}

/**
 * @param data
 */
export function rollingMedianBaseline(data: DataXY<Float64Array>) {
  data.y = baselineFct(data.y).correctedSpectrum;
  return { data };
}
