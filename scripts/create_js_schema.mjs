import fs from 'node:fs';

const schema = fs.readFileSync(new URL('../FilterXYSchema.json', import.meta.url), 'utf8');

const schemaJs = `'use strict';

module.exports = ${schema}`;

fs.writeFileSync(new URL('../FilterXYSchema.js', import.meta.url), schemaJs);
