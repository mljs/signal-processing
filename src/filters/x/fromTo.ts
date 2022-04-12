import { DataXY } from 'cheminfo-types';
import { xGetFromToIndex } from 'ml-spectra-processing';

export interface FromToFilter {
  name: 'fromTo';
  options?: FromToOptions;
}

export type FromToOptions = Parameters<typeof xGetFromToIndex>[1];

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
    data: {
      x: data.x.subarray(fromIndex, toIndex + 1),
      y: data.y.subarray(fromIndex, toIndex + 1),
    },
  };
}
