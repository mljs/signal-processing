import { DataXY } from 'cheminfo-types';
import { xApplyFunctionStr } from 'ml-spectra-processing';

export interface YFunctionFilter {
  name: 'yFunction';
  options?: YFunctionOptions;
}

export interface YFunctionOptions {
  /**
   * Will apply a function on the Y variable on each element of the array described as a string
   * In front of sequence of lowercase we will add 'Math.'. This allows to write
   * `sin(y) + cos(y)` and it will be replace internally by (y) => (Math.sin(y) + Math.cos(y))
   * @default ''
   */
  function?: string;
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function yFunction(
  data: DataXY<Float64Array>,
  options: YFunctionOptions = {},
) {
  return {
    data: {
      x: data.x,
      y: xApplyFunctionStr(data.y, {
        variableLabel: 'y',
        fctString: options.function,
      }),
    },
  };
}
