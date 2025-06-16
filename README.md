# ml-signal-processing

[![NPM version](https://img.shields.io/npm/v/ml-signal-processing.svg)](https://www.npmjs.com/package/ml-signal-processing)
[![npm download](https://img.shields.io/npm/dm/ml-signal-processing.svg)](https://www.npmjs.com/package/ml-signal-processing)
[![test coverage](https://img.shields.io/codecov/c/github/mljs/signal-processing.svg)](https://codecov.io/gh/mljs/signal-processing)
[![license](https://img.shields.io/npm/l/ml-signal-processing.svg)](https://github.com/mljs/signal-processing/blob/main/LICENSE)

Process data in the form of {x:[], y:[]}.

## Installation

```console
npm install ml-signal-processing
```

## Usage

```js
import { filterXY } from 'ml-signal-processing';

const data = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [1, 2, 3, 4, 5, 4, 3, 2, 1],
};

const filters = [
  { name: 'centerMedian' },
  { name: 'fromTo', options: { from: 2, to: 8 } },
];

const result = filterXY(data, filters);
/* result is
{
  x: Float64Array.from([2, 3, 4, 5, 6, 7, 8]),
  y: Float64Array.from([-1, 0, 1, 2, 1, 0, -1]),
}
*/
```

## License

[MIT](./LICENSE)
