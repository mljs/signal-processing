import { expect, test } from 'vitest';

import type { FilterXYType } from '../FilterXYType.ts';
import linear from '../filters/__tests__/data/linear.ts';
import { filterXY } from '../index.ts';

test('filters', () => {
  const filters: FilterXYType[] = [
    { name: 'centerMedian' },
    { name: 'fromTo', options: { from: 2, to: 8 } },
  ];

  const result = filterXY(linear, filters);

  expect(result.data).toStrictEqual({
    x: Float64Array.from([2, 3, 4, 5, 6, 7, 8]),
    y: Float64Array.from([-1, 0, 1, 2, 1, 0, -1]),
  });
});

test('reverseIfNeeded, not needed', () => {
  const filters: FilterXYType[] = [{ name: 'reverseIfNeeded' }];
  const data = {
    x: Float64Array.from([1, 2, 3, 4, 5]),
    y: Float64Array.from([1, 2, 3, 4, 1]),
  };
  const result = filterXY(data, filters);

  expect(result.data).toStrictEqual({
    x: Float64Array.from([1, 2, 3, 4, 5]),
    y: Float64Array.from([1, 2, 3, 4, 1]),
  });
});

test('reverseIfNeeded, needed', () => {
  const filters: FilterXYType[] = [{ name: 'reverseIfNeeded' }];
  const data = {
    x: Float64Array.from([5, 4, 3, 2, 1]),
    y: Float64Array.from([1, 2, 3, 4, 1]),
  };
  const result = filterXY(data, filters);

  expect(result.data).toStrictEqual({
    x: Float64Array.from([1, 2, 3, 4, 5]),
    y: Float64Array.from([1, 4, 3, 2, 1]),
  });
});

test('reverseIfNeeded, with empty filter', () => {
  const filters: FilterXYType[] = [
    // @ts-expect-error testing empty filter
    { name: '' },
    // @ts-expect-error testing empty filter
    {},
    { name: 'reverseIfNeeded' },
  ];
  const data = {
    x: Float64Array.from([5, 4, 3, 2, 1]),
    y: Float64Array.from([1, 2, 3, 4, 1]),
  };
  const result = filterXY(data, filters);

  expect(result.data).toStrictEqual({
    x: Float64Array.from([1, 2, 3, 4, 5]),
    y: Float64Array.from([1, 4, 3, 2, 1]),
  });
});

test('test unknown filter', () => {
  // @ts-expect-error testing error
  const filters: FilterXYType[] = [{ name: 'abc' }];
  const data = {
    x: Float64Array.from([5, 4, 3, 2, 1]),
    y: Float64Array.from([1, 2, 3, 4, 1]),
  };

  expect(() => filterXY(data, filters)).toThrow('Unknown filter: abc');
});
