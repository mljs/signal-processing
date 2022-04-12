//@ts-expect-error no type definition for baselines
import { airPLSBaseline as baselineFct } from 'baselines';
import { DataXY } from 'cheminfo-types';

export interface AirPLSBaselineFilter {
  name: 'airPLSBaseline';
}

/**
 * @param data
 */
export function airPLSBaseline(data: DataXY<Float64Array>) {
  data.y = baselineFct(data.y).correctedSpectrum;
  return { data };
}
