import { DataXY } from 'cheminfo-types';
import { xAdd, xMinValue } from 'ml-spectra-processing';

export interface SetMinXFilter {
  name: 'setMinX';
  options?: SetMinXOptions;
}

export interface SetMinXOptions {
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
export function setMinX(
  data: DataXY<Float64Array>,
  options: SetMinXOptions = {},
) {
  const { min = 0 } = options;
  const existingMin = xMinValue(data.x);
  if (existingMin === min) {
    return { data };
  }
  return {
    data: {
      x: xAdd(data.x, min - existingMin),
      y: data.y,
    },
  };
}
