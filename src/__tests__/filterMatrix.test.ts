import { expect, test } from 'vitest';

import type { FilterMatrixType } from '../FilterMatrixType.ts';
import { filterMatrix } from '../index.ts';

test('filterMatrix', () => {
  const filters: FilterMatrixType[] = [
    { name: 'pqn' },
    { name: 'matrixZRecale', options: { min: 0, max: 1 } },
  ];

  const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
  ];

  const result = filterMatrix(matrix, filters);

  expect(result).toStrictEqual({
    logs: [],
    data: [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2],
    ],
  });
});
