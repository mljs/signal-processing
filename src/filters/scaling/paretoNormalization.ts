import { DataXY } from 'cheminfo-types';
import { xParetoNormalization } from 'ml-spectra-processing';

export interface ParetoNormalizationFilter {
  name: 'paretoNormalization';
}

/**
 * Filter that allows to
 * @param data
 */
export function paretoNormalization(data: DataXY<Float64Array>) {
  return {
    data: {
      x: data.x,
      y: xParetoNormalization(data.y),
    },
  };
}
