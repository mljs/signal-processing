//@ts-expect-error no type definition for baselines
import { iterativePolynomialBaseline as baselineFct } from 'baselines';
import { DataXY } from 'cheminfo-types';

export interface IterativePolynomialBaselineFilter {
  name: 'iterativePolynomialBaseline';
}

/**
 * @param data
 */
export function iterativePolynomialBaseline(data: DataXY<Float64Array>) {
  data.y = baselineFct(data.y).correctedSpectrum;
  return data;
}
