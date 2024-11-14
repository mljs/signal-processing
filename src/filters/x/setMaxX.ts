import { DataXY } from 'cheminfo-types';
import { xAdd, xMaxValue } from 'ml-spectra-processing';

export interface SetMaxXFilter {
  name: 'setMaxX';
  options?: SetMaxXOptions;
}

export interface SetMaxXOptions {
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
export function setMaxX(
  data: DataXY<Float64Array>,
  options: SetMaxXOptions = {},
) {
  const { max = 1 } = options;
  const existingMax = xMaxValue(data.x);
  if (existingMax === max) {
    return { data };
  }
  return {
    data: {
      x: xAdd(data.x, max - existingMax),
      y: data.y,
    },
  };
}
