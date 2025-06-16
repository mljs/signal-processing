import type { DataXY } from 'cheminfo-types';
import { xApplyFunctionStr } from 'ml-spectra-processing';

export interface XFunctionFilter {
  name: 'xFunction';
  options?: XFunctionOptions;
}

export interface XFunctionOptions {
  /**
   * Will apply a function on the X variable on each element of the array described as a string
   * In front of sequence of lowercase we will add 'Math.'. This allows to write
   * `sin(x) + cos(x)` and it will be replace internally by (x) => (Math.sin(x) + Math.cos(x))
   * @default ''
   */
  function?: string;
}
/**
 * Filter that allows to
 * @param data
 * @param options
 */
export function xFunction(
  data: DataXY<Float64Array>,
  options: XFunctionOptions = {},
) {
  return {
    data: {
      x: xApplyFunctionStr(data.x, {
        variableLabel: 'x',
        fctString: options.function,
      }),
      y: data.y,
    },
  };
}
