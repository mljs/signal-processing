import { DataXY } from 'cheminfo-types';
import { xAdd, xMaxValue } from 'ml-spectra-processing';

export interface SetMaxYFilter {
  name: 'setMaxY';
  options?: SetMaxYOptions;
}

export interface SetMaxYOptions {
  /**
   * @default 1
   */
  max?: number;
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function setMaxY(
  data: DataXY<Float64Array>,
  options: SetMaxYOptions = {},
) {
  const { max = 1 } = options;
  const existingMax = xMaxValue(data.y);
  if (existingMax === max) {
    return { data };
  }
  return {
    data: {
      x: data.x,
      y: xAdd(data.y, max - existingMax),
    },
  };
}
