# Changelog

## [2.1.0](https://github.com/mljs/signal-processing/compare/v2.0.0...v2.1.0) (2025-09-17)


### Features

* ignore empty filters ([08da5f9](https://github.com/mljs/signal-processing/commit/08da5f9ae6c7e5226f82a0334420ca6e25ee5e4c))

## [2.0.0](https://github.com/mljs/signal-processing/compare/v1.2.0...v2.0.0) (2025-06-16)


### ⚠ BREAKING CHANGES

* The JSON schema must now be imported like this: `import filterXY from 'ml-signal-processing/FilterXYSchema.json' with { type: 'json' };`
* switch to esm-only and update `ml-gsd` ([#25](https://github.com/mljs/signal-processing/issues/25))

### Bug Fixes

* expose FilterXYSchema.json in exports ([#27](https://github.com/mljs/signal-processing/issues/27)) ([8cf34d0](https://github.com/mljs/signal-processing/commit/8cf34d00c000c9468c2241b4c56ac6aba0fb2fe8))


### Code Refactoring

* switch to esm-only and update `ml-gsd` ([#25](https://github.com/mljs/signal-processing/issues/25)) ([eca5d21](https://github.com/mljs/signal-processing/commit/eca5d2119d6cc1e2da59549d6ec94ec8bd169a31))

## [1.2.0](https://github.com/mljs/signal-processing/compare/v1.1.1...v1.2.0) (2024-11-14)


### Features

* add setMinX setMaxX setMinY setMaxY ([abbf225](https://github.com/mljs/signal-processing/commit/abbf225b0345165d06a9d927187928cbeda64ebb))

## [1.1.1](https://github.com/mljs/signal-processing/compare/v1.1.0...v1.1.1) (2024-10-10)


### Bug Fixes

* allow to import JSON schema as JS module ([a9e3c8f](https://github.com/mljs/signal-processing/commit/a9e3c8fda3377541291a2c555c343c41329b3fac))

## [1.1.0](https://github.com/mljs/signal-processing/compare/v1.0.4...v1.1.0) (2024-10-09)


### Features

* add reverseIfNeeded ([d728498](https://github.com/mljs/signal-processing/commit/d72849801e96423d12446399f674aa7271bf11ef))

## [1.0.4](https://github.com/mljs/signal-processing/compare/v1.0.3...v1.0.4) (2024-03-07)


### Bug Fixes

* update dependencies ([beebf51](https://github.com/mljs/signal-processing/commit/beebf515833c149c78c8574ac8abf8fa4eb0d300))

## [1.0.3](https://github.com/mljs/signal-processing/compare/v1.0.2...v1.0.3) (2023-03-24)


### Bug Fixes

* update ml-spectra-processing ([ace1fb5](https://github.com/mljs/signal-processing/commit/ace1fb5fbad5d2557c789e3144ac78846db1bb0e))

## [1.0.2](https://github.com/mljs/signal-processing/compare/v1.0.1...v1.0.2) (2022-11-29)


### Bug Fixes

* add schema in release ([9e6a482](https://github.com/mljs/signal-processing/commit/9e6a482c05aa006b6a3665c01fdb66fd36084901))

## [1.0.1](https://github.com/mljs/signal-processing/compare/v1.0.0...v1.0.1) (2022-11-25)


### Bug Fixes

* update dependencies ([4482264](https://github.com/mljs/signal-processing/commit/4482264acec13d100b48b8db320b8a73ef3aa846))


### Documentation

* fix wrong homepage url ([#14](https://github.com/mljs/signal-processing/issues/14)) ([f6ac479](https://github.com/mljs/signal-processing/commit/f6ac479465e3f9c4d96ee1eb3f388067563ddf51))

## [1.0.0](https://github.com/mljs/signal-processing/compare/v0.5.2...v1.0.0) (2022-11-25)


### Bug Fixes

* calibrateX if not enough peaks found ([403bbba](https://github.com/mljs/signal-processing/commit/403bbba2445e5a7eb9155785591ac2e999d4ec8e))


### Miscellaneous Chores

* release v1 ([9fb2498](https://github.com/mljs/signal-processing/commit/9fb249883f526a8ae0171d2eb0c8bbcd479a3aa1))

### [0.5.2](https://github.com/mljs/signal-processing/compare/v0.5.1...v0.5.2) (2022-05-06)


### Bug Fixes

* calibrateX didn't move the x axis in the right direction ([7504497](https://github.com/mljs/signal-processing/commit/7504497ae653da1022f7e0b9f752e6d41b4e59c7))

### [0.5.1](https://github.com/mljs/signal-processing/compare/v0.5.0...v0.5.1) (2022-05-06)


### Bug Fixes

* calibrateX should return an object containing data ([cc9b8df](https://github.com/mljs/signal-processing/commit/cc9b8df168edc6ed3849b813c9d98009a1d2a996))

## [0.5.0](https://github.com/mljs/signal-processing/compare/v0.4.0...v0.5.0) (2022-05-06)


### Features

* add calibrateX ([dcddad5](https://github.com/mljs/signal-processing/commit/dcddad586782459272a5bba1389ffdeca7c1b961))
* add paretoNormalization ([a0f7c15](https://github.com/mljs/signal-processing/commit/a0f7c156cf1902bbece19f1a6e7d94a28c8b8c4f))
* add xFunction ([ebd44ed](https://github.com/mljs/signal-processing/commit/ebd44ed3e680772c26f86efb5bdb431bd7d76f4c))
* add yFunction ([60dad5e](https://github.com/mljs/signal-processing/commit/60dad5e098e16c81c19b7e29e279053be2d92147))
* build and publish schema ([c418388](https://github.com/mljs/signal-processing/commit/c4183887ba5bf072f5401c69f6c5fd444950efb2))
* expose types ([3e54883](https://github.com/mljs/signal-processing/commit/3e54883d04beb48e0dd0c34ca97a9ecc318a3b08))


### Bug Fixes

* export FilterXYType ([d5baf3a](https://github.com/mljs/signal-processing/commit/d5baf3a7a6d94884b53497100b852bb02b6076f8))
* update dependencies and normed use 'value' ([b964d51](https://github.com/mljs/signal-processing/commit/b964d51b36d31f17c64796350b338cb9aea9f911))

## [0.4.0](https://github.com/mljs/signal-processing/compare/v0.3.0...v0.4.0) (2022-04-12)


### Features

* change code to allow filterXY to return logs ([cf158c7](https://github.com/mljs/signal-processing/commit/cf158c702c459254818f331362b671abd1a9b34d))


### Bug Fixes

* display eslint rule ([c6557cd](https://github.com/mljs/signal-processing/commit/c6557cd464af45d2a3300e40b0fd3139724ae094))

## [0.3.0](https://github.com/mljs/signal-processing/compare/v0.2.0...v0.3.0) (2022-04-11)


### Features

* rename FilterType to FilterXYType ([7144e89](https://github.com/mljs/signal-processing/commit/7144e89e2102ed4b5a636a4a90617640964b4a62))


### Bug Fixes

* export FilterXFilter ([8a3978e](https://github.com/mljs/signal-processing/commit/8a3978e67b7575c2cd1c0cf70fb59c6c57b5e7d6))

## [0.2.0](https://github.com/mljs/signal-processing/compare/v0.1.0...v0.2.0) (2022-04-11)


### Features

* add filterX and update dependency ([5cc1af7](https://github.com/mljs/signal-processing/commit/5cc1af7d761ebe535e0fbad353b91c5f4ceee1a3))

## [0.1.0](https://github.com/mljs/signal-processing/compare/v0.0.1...v0.1.0) (2022-04-06)


### Features

* add many filters ([97ccfcf](https://github.com/mljs/signal-processing/commit/97ccfcffbbcbf36a6b215e47762a11613ac77bc9))
* add more baseline corrections ([2f6ecd3](https://github.com/mljs/signal-processing/commit/2f6ecd309762a77442e800b33c12af39176833ab))

### 0.0.1 (2022-04-04)


### Features

* add airPLSBaseline ([e2f0b01](https://github.com/mljs/signal-processing/commit/e2f0b01b154995404bb1700014f4ffef143ce4bd))
* add divideBySD ([cb0d967](https://github.com/mljs/signal-processing/commit/cb0d967d907f864e68fbc2ce3983275a57003180))
* add ensureGrowing ([f072fdd](https://github.com/mljs/signal-processing/commit/f072fdd0907ace42cdc7652d8f40978f373261ca))
* add equallySpaced ([6fff490](https://github.com/mljs/signal-processing/commit/6fff490aa4ee2ea0bec4aec68c0d79e11efb8cab))
* add normed ([774173e](https://github.com/mljs/signal-processing/commit/774173e9a0751d7fca2ee398afca77e914b73af5))
* add type definition for the filters ([8f58200](https://github.com/mljs/signal-processing/commit/8f58200034195b79113d2d67a5f5802e7457992b))
* all test are now passing and methods implemented ([8f525ef](https://github.com/mljs/signal-processing/commit/8f525ef9cd5f548b8b5cd14ae06b6877a0e9ff21))


### Bug Fixes

* release 0.0.1 ([1b965ed](https://github.com/mljs/signal-processing/commit/1b965ed872b96424a8a61c0dcb833e4723bfbac2))
* release 1.0.0 ([8dd5e2d](https://github.com/mljs/signal-processing/commit/8dd5e2d3e7706d7091a3e0bb85bd8c0b24b9935f))
