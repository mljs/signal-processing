interface Filter {
  name: string;
  options: any;
}

/**
 * My module
 * @returns A very important number
 */
export function filterXY(data, filters: Filter[]): number {
  let result = data;
  for (let filter of filters) {
  }

  return result;
}
