import { DataXY } from 'cheminfo-types';
import { xyGrowingX } from 'ml-spectra-processing';

export interface ReverseIfNeededFilter {
  name: 'reverseIfNeeded';
}

/**
 * Ensure X values are strictly monotonic increasing
 * http://www-groups.mcs.st-andrews.ac.uk/~john/analysis/Lectures/L8.html
 * @param data
 */
export function reverseIfNeeded(data: DataXY<Float64Array>) {
  return { data: xyGrowingX(data) };
}
