import { DataXY } from 'cheminfo-types';
import { xyEnsureGrowingX } from 'ml-spectra-processing';

export interface EnsureGrowingFilter {
  name: 'ensureGrowing';
}

/**
 * Ensure X values are strictly monotonic increasing
 * http://www-groups.mcs.st-andrews.ac.uk/~john/analysis/Lectures/L8.html
 * @param data
 */
export function ensureGrowing(data: DataXY<Float64Array>) {
  return xyEnsureGrowingX(data);
}
