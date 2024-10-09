import { DataXY } from 'cheminfo-types';
import { gsd, GSDOptions } from 'ml-gsd';
import { xFindClosestIndex, xMean, xAdd } from 'ml-spectra-processing';

export interface CalibrateFilter {
  name: 'calibrateX';
  options?: CalibrateOptions;
}

export interface CalibrateOptions {
  /**
   * from
   * @default x[0]
   */
  from?: number;
  /**
   * to
   * @default x[x.length-1]
   */
  to?: number;
  /**
   * number of points
   * @default 1
   */
  nbPeaks?: number;
  /**
   * define the new X value
   * @default 0
   */
  targetX?: number;
  /**
   * array of from / to that should be kept
   * @default [{from,to}]
   */
  gsd?: GSDOptions;
}
/**
 * Filter that allows to calibrateX the x axis based on the presence of peaks
 * @param data
 * @param options
 */
export function calibrateX(
  data: DataXY<Float64Array>,
  options: CalibrateOptions = {},
) {
  const {
    targetX = 0,
    nbPeaks = 1,
    from = data.x[0],
    to = data.x.at(-1) as number,
    gsd: gsdOptions = {
      minMaxRatio: 0.1,
      realTopDetection: true,
      smoothY: true,
      sgOptions: {
        windowSize: 7,
        polynomial: 3,
      },
    },
  } = options;

  const fromIndex = xFindClosestIndex(data.x, from);
  const toIndex = xFindClosestIndex(data.x, to);

  const peaks = gsd(
    {
      x: data.x.subarray(fromIndex, toIndex),
      y: data.y.subarray(fromIndex, toIndex),
    },
    gsdOptions,
  )
    .sort((a, b) => b.y - a.y)
    .slice(0, nbPeaks);

  if (peaks.length < nbPeaks) return { data };

  const middle = xMean(peaks.map((peak) => peak.x));
  return { data: { x: xAdd(data.x, targetX - middle), y: data.y } };
}
