import { DataXY } from 'cheminfo-types';
import { xGetFromToIndex } from 'ml-spectra-processing';

export interface FromToOptions {
  fromIndex?: number;
  toIndex?: number;
  from?: number;
  to?: number;
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function fromTo(
  data: DataXY<Float64Array>,
  options: FromToOptions = {},
) {
  const { fromIndex, toIndex } = xGetFromToIndex(data.x, options);
  return {
    x: data.x.subarray(fromIndex, toIndex + 1),
    y: data.y.subarray(fromIndex, toIndex + 1),
  };
}
