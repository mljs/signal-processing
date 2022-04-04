# signal-processing

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Process data in the form of {x:[], y:[]}.

## Installation

`$ npm i signal-processing`

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

[npm-image]: https://img.shields.io/npm/v/signal-processing.svg
[npm-url]: https://www.npmjs.com/package/signal-processing
[ci-image]: https://github.com/cheminfo/signal-processing/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/signal-processing/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/signal-processing.svg
[codecov-url]: https://codecov.io/gh/cheminfo/signal-processing
[download-image]: https://img.shields.io/npm/dm/signal-processing.svg
[download-url]: https://www.npmjs.com/package/signal-processing
