//@ts-expect-error no type definition for baselines
import { rollingBallBaseline as baselineFct } from 'baselines';
import { DataXY } from 'cheminfo-types';

export interface RollingBallBaselineFilter {
  name: 'rollingBallBaseline';
}

/**
 * @param data
 */
export function rollingBallBaseline(data: DataXY<Float64Array>) {
  data.y = baselineFct(data.y).correctedSpectrum;
  return { data };
}
