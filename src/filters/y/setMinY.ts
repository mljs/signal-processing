import type { DataXY } from 'cheminfo-types';
import { xAdd, xMinValue } from 'ml-spectra-processing';

export interface SetMinYFilter {
  name: 'setMinY';
  options?: SetMinYOptions;
}

export interface SetMinYOptions {
  /**
   * @default 0
   */
  min?: number;
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function setMinY(
  data: DataXY<Float64Array>,
  options: SetMinYOptions = {},
) {
  const { min = 0 } = options;
  const existingMin = xMinValue(data.y);
  if (existingMin === min) {
    return { data };
  }
  return {
    data: {
      x: data.x,
      y: xAdd(data.y, min - existingMin),
    },
  };
}
